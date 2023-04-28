import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useState } from "react";
import { IOption } from "../../models/IOption";

export interface ICustomDropDownProps {
  options: ItemType[];
  onChange: (item: IOption) => void;
  selectedItem?: IOption;
  placeholder?: string;
}

const CustomDropdown = (props: ICustomDropDownProps) => {
  const [selectedOption, setSelectedOption] = useState<IOption | undefined>(
    undefined
  );

  const handleMenuClick = (e: any) => {
    if (!props.options || !props.options.length) {
      return;
    }
    const selectedItem = props.options.filter(
      // eslint-disable-next-line
      (x) => x?.key == e.key
    )[0] as IOption;
    setSelectedOption(selectedItem);
    props.onChange(selectedItem);
  };

  const menuProps = {
    items: props.options,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps}>
      <Space>
        <Button>
          <Space>
            {selectedOption ? selectedOption.label : props.placeholder}
            <DownOutlined />
          </Space>
        </Button>
        </Space>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;

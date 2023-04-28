import { ItemType } from "antd/lib/menu/hooks/useItems";
import { IOption } from "../../models/IOption";
import CustomDropdown from "../../components/DropDown/DropDown";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const { t } = useTranslation();
  const items: ItemType[] = [
    { key: "1", label: "Patient" },
    { key: "2", label: "Device" },
    { key: "3", label: "Observation" },
  ];

  const onTypeChange = (option: IOption) => {
    console.log(option);
    debugger;
  };

  return (
    <div>
      <CustomDropdown
        options={items}
        onChange={(e) => {
          onTypeChange(e);
        }}
        placeholder={t("searchPage.resourceType") ?? ""}
      />
      Search Resource tha psanxei eite patient eite device eite observation me
      kapoia filtra proeretika
    </div>
  );
};

export default SearchPage;

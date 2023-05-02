import { ItemType } from "antd/lib/menu/hooks/useItems";
import { IOption } from "../../models/IOption";
import CustomDropdown from "../../components/DropDown/DropDown";
import { useTranslation } from "react-i18next";
import { Space } from "antd";
import AppSettings from "../../helpers/AppSettings";

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
      <Space direction="vertical" size={20}>
      <CustomDropdown
        options={items}
        onChange={(e) => {
          onTypeChange(e);
        }}
        placeholder={t("searchPage.resourceType") ?? ""}
      />
      Search Resource tha psanxei eite patient eite device eite observation me
      kapoia filtra proeretika

      <div>Hapi Server Search at <a href={AppSettings.BaseUrl.replace("fhir/","")}>{AppSettings.BaseUrl.replace("fhir/","")}</a></div>
      </Space>
    </div>
  );
};

export default SearchPage;

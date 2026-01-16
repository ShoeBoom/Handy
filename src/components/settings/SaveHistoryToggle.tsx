import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface SaveHistoryToggleProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const SaveHistoryToggle: React.FC<SaveHistoryToggleProps> = ({
  descriptionMode = "tooltip",
  grouped = false,
}) => {
  const { t } = useTranslation();
  const { getSetting, updateSetting, isUpdating } = useSettings();
  const saveHistory = getSetting("save_history") ?? true;

  return (
    <ToggleSwitch
      checked={saveHistory}
      onChange={(enabled) => updateSetting("save_history", enabled)}
      isUpdating={isUpdating("save_history")}
      label={t("settings.debug.saveHistory.label")}
      description={t("settings.debug.saveHistory.description")}
      descriptionMode={descriptionMode}
      grouped={grouped}
    />
  );
};

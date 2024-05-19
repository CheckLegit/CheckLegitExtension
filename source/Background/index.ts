import { browser } from "webextension-polyfill-ts";

// A generic onclick callback function.
browser.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info: any) {
  console.log(info);
  switch (info.menuItemId) {
    case "report_site":
      confirm("report_site");
      break;
    case "check_site":
      confirm("check_site");
      break;
    default:
      break;
  }
}

browser.runtime.onInstalled.addListener((): void => {
  console.log("🦄", "extension installed");

  browser.contextMenus.create({
    title: "Report This URL",
    type: "normal",
    id: "report_site",
  });
  browser.contextMenus.create({
    title: "Check This URL",
    type: "normal",
    id: "check_site",
  });
});

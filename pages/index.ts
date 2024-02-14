import { PageHolder } from "./base/baseClass";
import { Header } from "./components/header.component";
import { LoginPage } from "./login.page";

export class AppManager extends PageHolder {
    public loginPage = new LoginPage(this.page);
    public header = new Header(this.page);
}
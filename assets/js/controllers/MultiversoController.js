import PrincipalView from "../views/PrincipalView.js";
import atores from "../datas/atores.js";

export default class MultiversoController {
    iniciar = () => {
        PrincipalView(atores);
    }
}
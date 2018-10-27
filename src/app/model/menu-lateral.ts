import { PerfilSistema } from "../enum/sisgesport.enum";

export class MenuLateral {
    public router: string;
    public IClass: string;
    public legend: string;
    public perfil: PerfilSistema;
    public nestedsMenus: MenuLateral[];
}

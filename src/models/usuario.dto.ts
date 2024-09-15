export interface UsuarioDTO {
    id: string;
    nome: string;
    cpfCnpj: string;
    areaRestricao: string;
    //perfis: string | IRegExpCallback ;
    imageURL?: string;

}

//export interface IRegExpCallback {
//    ($USUARIO: string, $ADMIN?: string): string;
//}
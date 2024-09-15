import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../../config/api.config';
import { UsuarioDTO } from '../../models/usuario.dto';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByNome(nome: string): Observable<UsuarioDTO> {

        console.log(nome);
//        let token = this.storage.getLocalUser().token;
//        let authHeader = new HttpHeaders({ 'Authorization': 'Bearer' + token });
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/nome?value=${nome}`
//            , { 'headers': authHeader }
        );
    }

    getImageFromDir(id: string) {
        let url = `${API_CONFIG.bucketBaseUrl}/cp@{id}.png`
        return this.http.get(url, { responseType: 'blob' });
    }
}
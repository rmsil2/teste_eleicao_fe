import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaPessoaDTO } from '../../models/categoriapessoa.dto';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaPessoaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaPessoaDTO[]> {
        return this.http.get<CategoriaPessoaDTO[]>(`${API_CONFIG.baseUrl}/categoriaPessoa`);
    }
}
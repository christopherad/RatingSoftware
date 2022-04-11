import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class ImageService{
    constructor(private http: HttpClient) {}

    public uploadImage(image: File): Observable<any> {
        const formData=new FormData();
        formData.append('image', image);
            return this.http.post('http://51.158.72.178:1337/api/upload/image-upload', formData);
    }
}
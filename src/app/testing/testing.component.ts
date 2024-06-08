import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  title = 'angular';
  data= ''
  public Editor = ClassicEditor;


  content = '';
  quillConfig = {
    // Quill configuration options
  };
  
  constructor()
  {


    this.data = '<p>as asdasdhs asdasddasd&nbsp;</p><p>&nbsp;</p><figure class="media"><oembed url="https://www.youtube.com/watch?v=GXftq9TnhaA"></oembed></figure><p>&nbsp;</p><p><i><strong>adasd asd</strong></i></p>'
  
    
    this.data = this.data + '<figure class="media"><oembed url="https://www.youtube.com/watch?v=GXftq9TnhaA"></oembed></figure>'
  }
  showDate()
  {
    console.log(this.data)
  }
}

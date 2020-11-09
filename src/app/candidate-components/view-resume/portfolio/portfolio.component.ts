import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'services/candidate/portfolio.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: any = [];
  portfolioClicked = false;
  portfolioForm: FormGroup;
  public fileString;
  fileData: any;
  fileSrc: string | ArrayBuffer;
  file: any;

  fileUploaded;

  users: any = []

  portfolioFileObj;

  portfolioUpdateForm: FormGroup
  testing;



  constructor(
    private portfolioServie: PortfolioService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.portfolioForm = this.fb.group({
      file: '',
      name: ''
    });

    this.portfolioForm = this.fb.group({
      file: '',
      name: ''
    });
    this.portfolioUpdateForm = this.fb.group({
      portfolios: this.fb.array([this.createPortfolioUpdateForm()]),
    });
    this.getAllPortfolio().subscribe(data => {
      this.portfolio = data
    })

  }
  getAllPortfolio() {
    return this.http.get('http://localhost:3000/portfolio')
  }

  update() {
    this.getAllPortfolio().subscribe(data => {
      this.portfolio = data

      //to listen in sidebar chart
      this.portfolioServie.sidebarChart.next(0)
    })
  }

  // **************upload file******************//




  // selectedFile = null
  // onFileSelected(event){
  //   console.log(event);

  //   this.selectedFile = event.target
  //   let uploadFormData = new FormData ();
  //   let uploadFormObj={
  //     "file":event.target.files[0],
  //     "name":event.target.files[0].name
  //   }
  //   // uploadFormData.append('file' , this.selectedFile.files[0])
  //   for ( var key in uploadFormObj ) {
  //     uploadFormData.append(key, uploadFormObj[key]);
  // }
  //   console.log(uploadFormData);

  //   this.http.post('http://localhost:3000/portfolio',uploadFormObj).subscribe(response=>{
  //     console.log(response);
  //   })
  // }
  // files;
  // getAttachedFile(){

  //   this.http.get('http://localhost:3000/portfolio').subscribe(response=>{
  //     console.log(response[1].file);
  //     this.files=response[1].file
  // })
  // }
  readUrl(event: any) {
    this.fileData = <File>event.target.files[0];
    console.log(event.target.files);
    let mimeType = this.fileData.type;
    if (mimeType.match(/image||text\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      this.portfolioForm.value.file = this.file;

      console.log(this.portfolioForm.value.file)
      this.testing = this.file;

      console.log(this.testing)
      console.log(this.portfolioForm.value.file);
    };
    // this.preview();
    console.log(this.fileData);
    let myObj = {
      "file": this.portfolioForm.value.file,
      "name": this.portfolioForm.value.name
    }
    this.http.post('http://localhost:3000/portfolio', myObj).subscribe(response => {
      console.log(response);
    })
  }



  onAddPortfolio() {
    this.portfolioClicked = !this.portfolioClicked
    console.log(this.portfolioUpdateForm);
    console.log(this.portfolio);


  }

  createPortfolioUpdateForm() {
    return this.fb.group({
      title: ['', [Validators.required]],
      portfolio: ['', [Validators.required]],
    })
    console.log(this.portfolioUpdateForm);
  }
  addNewPortfolioUpdateForm() {
    const addPortfolio = this.portfolioUpdateForm.get('portfolios') as FormArray;
    addPortfolio.push(this.createPortfolioUpdateForm())
    console.log(this.portfolioUpdateForm);
  }
  onSubmitPortfolio(form) {
    console.log(form);
    console.log(this.portfolioFileObj);
    this.addPortfolio(this.portfolioFileObj).subscribe(data => {
      console.log(data);
      console.log(this.portfolio);


      this.portfolioClicked = false;
      this.portfolioUpdateForm = this.fb.group({
        portfolios: this.fb.array([this.createPortfolioUpdateForm()]),
      });
      this.update()
    })
  }

  addPortfolio(portfolioObj) {
    return this.http.post('http://localhost:3000/portfolio', portfolioObj);
  }

  cancelAddPortfolio() {
    this.portfolioUpdateForm = this.fb.group({
      portfolios: this.fb.array([this.createPortfolioUpdateForm()])

    });
    console.log(this.portfolioUpdateForm);
    this.portfolioClicked = false;
  }
  deletePortfolioUpdateFormArray(i) {
    var deleteport = <FormArray>this.portfolioUpdateForm.controls["portfolios"];
    deleteport.removeAt(i);
    if (this.portfolioUpdateForm.value.portfolios.length == 0) {
      this.portfolioClicked = false;
    }
    console.log(this.portfolioUpdateForm);
  }


  readUrlNew(event: any) {
    this.fileData = <File>event.target.files[0];
    console.log(event.target.files[0]);
    let mimeType = this.fileData.type;
    if (mimeType.match(/image||text\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      this.portfolioUpdateForm.value.portfolios[0].portfolio = this.file;
      this.testing = this.file;
      console.log(this.testing);
      console.log(this.file);
    };
    // this.preview();
    console.log(this.fileData);



    this.portfolioFileObj = {
      "file": this.file,
      "title": this.portfolioUpdateForm.value.portfolios[0].title
    }
    console.log(this.portfolioFileObj);

  }

  onDeletePortfolio(Id) {
    this.deletePortfolio(Id).subscribe(data => {
      console.log(data);
      console.log(this.portfolio);

      this.update()
    })
  }
  deletePortfolio(id) {
    return this.http.delete('http://localhost:3000/portfolio/' + id)
  }


}

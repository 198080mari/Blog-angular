import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { datafake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0";

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
    this.id = params.get("id");
    this.setValuesToComponent(this.id);
  });
}
  setValuesToComponent(id:string | null): void{
    const result = datafake.filter(article => article.id === id);
    if (result.length > 0) {
    const article = result[0];
    this.contentTitle = article.title
    this.contentDescription = article.description
    this.photoCover = article.photoCover
  }
}
}

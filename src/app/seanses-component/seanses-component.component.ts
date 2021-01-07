import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { Seance } from '../seance';
import { AppService } from '../app.service';

@Component({
  selector: 'app-seanses-component',
  templateUrl: './seanses-component.component.html',
  styleUrls: ['./seanses-component.component.css']
})
export class SeansesComponentComponent implements OnInit {
  screeningList: Seance[];
  filterDate:Date;
  selectedScreening: Seance = null;
  selected = false;
  newScreening: Seance;
  show = false;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getSeanses().subscribe((screenings: Seance[]) => {
      this.screeningList = screenings;
      console.log(screenings);
    });
    this.filterDate = new Date();
  }


  add(screening: Seance): void {
    let id;
    if (this.screeningList.length == 0) id = 1;
    else id = this.screeningList[this.screeningList.length - 1].id + 1;
    screening.id = id;
    this.screeningList.push(screening);
    this.appService.addScreening(screening).subscribe((x) => console.log(x));
  }

  onSelect(screening: Seance): void {
    if (screening == null) this.show = false;
    if (!this.selected) {
      this.selectedScreening = screening;
    }
  }

  
  delete(which: number): void {
    let idx = this.screeningList.findIndex((x) => x.id == which);
    this.screeningList.splice(idx, 1);
    this.appService.deleteScreening(which).subscribe((x) => console.log(x));
  }


  edit(screening: Seance): void {
    console.log('edited screening:' + screening);
    let idx = this.screeningList.findIndex((s) => s.id == screening.id);
    this.screeningList[idx] = screening;
    this.appService.editScreening(screening.id, screening).subscribe((x) => console.log(x));
  }

  showEditForm(): void {
    this.show = true;
  }

  hideEditForm(): void {
    this.show = false;
  }

  filterItems(){
    return this.screeningList.filter(x => x.date >= this.filterDate);
}

}

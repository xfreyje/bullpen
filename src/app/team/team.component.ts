import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../players.service';
import { RouterModule, Routes } from '@angular/router';
import '@angular/http';
import '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  providers: [PlayerService],
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

   pageTitle: string = 'WoW';
   defaultRole: string = 'Participants';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   searchCriteria: string;
   players: IPlayer[];
   errorMessage: string;

    constructor(private _playerService: PlayerService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Just logging stuff to console');
        // this.events = this._eventService.getEvents();
        this._playerService.getPlayers()
            .subscribe(players => this.players = players,
            error => this.errorMessage = <any>error);
    }

    //
    // This is the local function that renders the entire message
    // with the payload in the template.
    // 
    onRatingClicked(message: string): void {
        this.defaultRole = 'Player List: ' + message;
    }


  onClick() {
    console.log('Someone just clicked me...');
  }


}

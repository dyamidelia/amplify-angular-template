import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dog-pill-tracker';
  currentTime: Date = new Date();

  // Edit mode
  editMode = false;

  // Day theme toggles
  dayMainToggle = false;
  daySubToggle1 = false;
  daySubToggle2 = false;
  daySubToggle3 = false;

  // Night theme toggles
  nightMainToggle = false;
  nightSubToggle1 = false;
  nightSubToggle2 = false;
  nightSubToggle3 = false;

  // Labels for the toggles (editable in edit mode)
  dayMainToggleLabel = 'Day Pill';
  daySubToggle1Label = 'Day Sub Toggle 1';
  daySubToggle2Label = 'Day Sub Toggle 2';
  daySubToggle3Label = 'Day Sub Toggle 3';

  nightMainToggleLabel = 'Night Pill';
  nightSubToggle1Label = 'Night Sub Toggle 1';
  nightSubToggle2Label = 'Night Sub Toggle 2';
  nightSubToggle3Label = 'Night Sub Toggle 3';

  ngOnInit() {
    // Load saved state from localStorage
    this.loadState();

    // Update time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  // Save the state to localStorage, including the toggle labels
  saveState() {
    const state = {
      dayMainToggle: this.dayMainToggle,
      daySubToggle1: this.daySubToggle1,
      daySubToggle2: this.daySubToggle2,
      daySubToggle3: this.daySubToggle3,
      nightMainToggle: this.nightMainToggle,
      nightSubToggle1: this.nightSubToggle1,
      nightSubToggle2: this.nightSubToggle2,
      nightSubToggle3: this.nightSubToggle3,
      dayMainToggleLabel: this.dayMainToggleLabel,
      daySubToggle1Label: this.daySubToggle1Label,
      daySubToggle2Label: this.daySubToggle2Label,
      daySubToggle3Label: this.daySubToggle3Label,
      nightMainToggleLabel: this.nightMainToggleLabel,
      nightSubToggle1Label: this.nightSubToggle1Label,
      nightSubToggle2Label: this.nightSubToggle2Label,
      nightSubToggle3Label: this.nightSubToggle3Label,
    };
    localStorage.setItem('pillTrackerState', JSON.stringify(state));
  }

  // Load the state from localStorage
  loadState() {
    const savedState = localStorage.getItem('pillTrackerState');
    if (savedState) {
      const state = JSON.parse(savedState);
      // Load the toggle states
      this.dayMainToggle = state.dayMainToggle;
      this.daySubToggle1 = state.daySubToggle1;
      this.daySubToggle2 = state.daySubToggle2;
      this.daySubToggle3 = state.daySubToggle3;
      this.nightMainToggle = state.nightMainToggle;
      this.nightSubToggle1 = state.nightSubToggle1;
      this.nightSubToggle2 = state.nightSubToggle2;
      this.nightSubToggle3 = state.nightSubToggle3;

      // Load the toggle labels
      this.dayMainToggleLabel = state.dayMainToggleLabel || 'Day Pill';
      this.daySubToggle1Label = state.daySubToggle1Label || 'Day Sub Toggle 1';
      this.daySubToggle2Label = state.daySubToggle2Label || 'Day Sub Toggle 2';
      this.daySubToggle3Label = state.daySubToggle3Label || 'Day Sub Toggle 3';

      this.nightMainToggleLabel = state.nightMainToggleLabel || 'Night Pill';
      this.nightSubToggle1Label = state.nightSubToggle1Label || 'Night Sub Toggle 1';
      this.nightSubToggle2Label = state.nightSubToggle2Label || 'Night Sub Toggle 2';
      this.nightSubToggle3Label = state.nightSubToggle3Label || 'Night Sub Toggle 3';
    }
  }

  // Reset only the toggle states, not the labels
  resetToggles() {
    this.dayMainToggle = false;
    this.daySubToggle1 = false;
    this.daySubToggle2 = false;
    this.daySubToggle3 = false;

    this.nightMainToggle = false;
    this.nightSubToggle1 = false;
    this.nightSubToggle2 = false;
    this.nightSubToggle3 = false;

    // Save the state after resetting the toggles
    this.saveState();
  }
}

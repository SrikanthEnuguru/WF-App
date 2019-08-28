import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-country-selector",
  templateUrl: "./country-selector.component.html",
  styleUrls: ["./country-selector.component.scss"]
})
export class CountrySelectorComponent implements OnInit {
  @Input() countries;

  data: any;

  constructor() {}

  ngOnInit() {
    const sorted = this.countries.sort((a, b) => (a.name > b.name ? 1 : -1));

    const grouped = sorted.reduce((groups, country) => {
      const letter = country.name.charAt(0);

      groups[letter] = groups[letter] || [];
      groups[letter].push(country);

      return groups;
    }, {});

    const result = Object.keys(grouped).map(key => ({
      key,
      countries: grouped[key]
    }));
    this.data = result;
    console.log(result);
  }
}

export class Country {
  id: string;
  name: string;
}

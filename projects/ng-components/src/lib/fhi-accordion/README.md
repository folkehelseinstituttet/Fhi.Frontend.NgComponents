# Fhi-Accordion

Fhi wrapper for the Angular bootstrap component: ngb-accordion.

With this component you will get premade styling with animated arrow for opening and closing the list-items

## Usage

```ts
<fhi-accordion
    [items]="myItemList"
    [faAngleDown]="faAngleDown"
    [headerTemplate]="myHeaderTemplate"
    [contentTemplate]="myContentTemplate"
></fhi-accordion>

<ng-template #myHeaderTemplate let-item="item">
  <div class="fhi__accordion-header">
    <span>{{item.Title}}</span>
    <span>{{item.CreatedDate | date: 'dd.MM.yyyy'}}</span>
  </div>
</ng-template>

<ng-template #myContentTemplate let-item="item">
  <div class="fhi__accordion-content">
    <p>{{item.text}}</p>
  </div>
</ng-template>
```

## Properties

  `items: any[] = [];`
  List of items to be displayed in the accordion, the items should contain the property: 'id', if not please provide you own identifyItem function for id's

  `faAngleDown!: any;`
  FontAwesome icon for use in the accordion expand button

  `headerTemplate!: TemplateRef<any>;`
  Custom header template

  `contentTemplate!: TemplateRef<any>;`
  Custom content template

  `panelChange: Function = () => {};`
  Optional function that gets called when a panel in the accordion changes state

  `identifyItem: Function = (item: any) => `Item-${item.id}`;`
  Optional function for creating your own item id's, this should return a string
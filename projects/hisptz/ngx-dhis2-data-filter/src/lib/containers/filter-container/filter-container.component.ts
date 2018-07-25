import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'hisptz-filter-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit, OnChanges {
  @Input() programs;
  @Input() programStages;
  @Input() hiddenDataElements: any = [];
  @Input() dataFilterOptions: any = [];
  @Input() selectedGroup: Group;
  @Input() selectedItems: any = {};

  public dataItems: any = {
    dataElements: [],
    indicators: [],
    dataElementGroups: [],
    indicatorGroups: [],
    categoryOptions: [],
    dataSets: [],
    programs: [],
    programIndicators: [],
    dataSetGroups: [
      { id: '', name: 'Reporting Rate' },
      { id: '.REPORTING_RATE_ON_TIME', name: 'Reporting Rate on time' },
      { id: '.ACTUAL_REPORTS', name: 'Actual Reports Submitted' },
      { id: '.ACTUAL_REPORTS_ON_TIME', name: 'Reports Submitted on time' },
      { id: '.EXPECTED_REPORTS', name: 'Expected Reports' }
    ]
  };
  public availableItems: any;
  public groups: Group[];
  public groupList: Group[];

  constructor() {}

  ngOnInit() {
    this.initiateData(this.programs, this.programStages);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { selectedGroup, selectedItems } = changes;
    const selectedOptions = this.dataFilterOptions.filter(({ selected }) => selected).map(({ prefix }) => prefix);
    if (selectedGroup && !selectedGroup.firstChange) {
      this.setAvailableItems(this.getSelectedGroupList(selectedOptions, this.selectedGroup));
    }
  }

  initiateData(_programs, stages) {
    const programStages = Object.assign({}, ...stages.map(stage => ({ [stage.id]: stage })));
    const programs = _programs.map(({ id, name, programStages }) => ({
      id,
      name,
      programStages
    }));
    const attributes = _programs
      .map(({ id: programid, programTrackedEntityAttributes }) =>
        programTrackedEntityAttributes.map(trackedEntityAttribute => ({
          ...trackedEntityAttribute,
          name: `[PA] ${trackedEntityAttribute.name}`,
          type: 'pa',
          id: `${programid}.${trackedEntityAttribute.id}`,
          attributeid: trackedEntityAttribute.id,
          programid
        }))
      )
      .reduce((acc, cur) => acc.concat(cur), []);
    this.dataItems = { ...this.dataItems, programs, attributes, programStages };
    this.groupList = this.initialGoupList(['ALL']);
    const selectedOptions = this.dataFilterOptions.filter(({ selected }) => selected).map(({ prefix }) => prefix);
    const groupIsSelected = Object.keys(this.selectedGroup).length;
    if (!groupIsSelected) {
      const dummyGroup = { id: 'ALL' };
      this.setAvailableItems(this.getSelectedGroupList(selectedOptions, dummyGroup));
    } else {
      this.setAvailableItems(this.getSelectedGroupList(selectedOptions, this.selectedGroup));
    }
  }

  setAvailableItems(available: any[]) {
    // const { ids } = this.selectedItems;
    this.availableItems = available;
  }

  // Helper function to get data groups
  getData() {
    return {
      dx: this.dataItems.dataElementGroups,
      in: this.dataItems.indicatorGroups,
      ds: this.dataItems.dataSetGroups,
      pr: this.dataItems.programs,
      prStages: this.dataItems.programStages,
      fn: this.dataItems.functions
    };
  }

  getDataItems() {
    const { dataElements: de, programs: pr, attributes: pa, programStages: prStages } = this.dataItems;
    return { de, pr, pa, prStages };
  }

  getSelectedGroupList(selectedOptions = [], group?: Group) {
    const { de, pr, pa } = this.getDataItems();
    const currentGroupList = [];
    if (selectedOptions.includes('ALL') || selectedOptions.includes('pr')) {
      if (group.id === 'ALL') {
        currentGroupList.push(...de, ...pa);
      } else {
        const { programid, group: groupid, stageid } = group;
        let neededArray = [...de, ...pa].filter(value => value.programid === programid);
        if (groupid === 'stage') {
          neededArray = neededArray.filter(
            ({ type, programStageid }) => type === 'pa' || (type === 'de' && programStageid === stageid)
          );
        }
        currentGroupList.push(...neededArray);
      }
    }
    const groupWithoutHiddenItems = currentGroupList.filter(({ id }) => !this.hiddenDataElements.includes(id));
    return sortBy(groupWithoutHiddenItems, 'name');
  }

  toggleDataFilterOption(option, event) {
    event.stopPropagation();
    console.log({ option });
  }

  initialGoupList(options = []): Group[] {
    const currentGroupList = [];

    const data: any = this.getDataItems();

    if (options.includes('ALL') || options.includes('pr')) {
      const { pr, prStages } = data;
      const group = pr
        .map(({ id: programid, name: programName, programStages }) => [
          ...programStages.map(({ id: stageid }) => ({
            id: `${programid}.${stageid}`,
            programid,
            group: 'stage',
            stageid,
            name: `${programName}-${prStages[stageid] && prStages[stageid].name}`
          })),
          { id: programid, programid, group: 'ALL', name: `${programName}-ALL` }
        ])
        .reduce((acc, cur) => acc.concat(cur), []);
      currentGroupList.push(...group);
    }
    return [...sortBy(currentGroupList, 'name')];
  }
}

export interface Group {
  id: string;
  programid?: string;
  group?: string;
  stageid?;
}

export const sortBy = (collection = [], key) =>
  collection.sort((a, b) => {
    const keyA = a[key].toLowerCase();
    const keyB = a[key].toLowerCase();
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });

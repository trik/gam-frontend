import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AdminEditField, AdminEditFieldSubtype, AdminEditFieldType } from '@gngt/core/admin';

import { ProjectService } from '../projects';

const fields: AdminEditField[] = [
  {
    name: 'id',
    label: 'ID',
    type: AdminEditFieldType.Input,
    subtype: AdminEditFieldSubtype.Number,
    readonly: true,
  },
  {
    name: 'name',
    label: 'Name',
    type: AdminEditFieldType.Input,
    subtype: AdminEditFieldSubtype.Text,
  },
  {
    name: 'slug',
    label: 'Slug',
    type: AdminEditFieldType.Input,
    subtype: AdminEditFieldSubtype.Text,
  },
];

@Component({
  selector: 'gam-project-edit',
  templateUrl: 'project-edit.component.html',
  styleUrls: ['project-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProjectEditComponent {
  readonly fields = fields;
  constructor(readonly service: ProjectService) { }
}

export class StudentClassroomManagementGetDataModal {
  organization_id: string;
  group_id: string;
  constructor(organizationId: string, groupId: string) {
    this.organization_id = organizationId;
    this.group_id = groupId;
  }
}

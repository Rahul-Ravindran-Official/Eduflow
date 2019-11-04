export class CreateClassModal {
  group_name: string;
  group_code: string;
  group_description: string;
  user_id: string;
  user_type_id: string;

  constructor(groupName: string, groupCode: string, groupDescription: string, userId: string, userTypeId: string) {
    this.group_name = groupName;
    this.group_code = groupCode;
    this.group_description = groupDescription;
    this.user_id = userId;
    this.user_type_id = userTypeId;
  }

}

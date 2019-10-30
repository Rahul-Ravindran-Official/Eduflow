export interface AClass {
  name: string;
  lastActivity: Date;
}

export interface Answer {
  parentPostId: string;
  upvoted: boolean;
  answerId: string;
  authorDisplayName: string;
  authorDisplayImage: string;
  trophyCount: number;
  answer: string;
  upvoteCount: number;
  discussionCount: number;
  discussionId: string;
  lastEdited: string;
  reported: boolean;
}

export interface DiscussionComment {
  comment: string;
  authorDisplayName: string;
  dateTimePosted: string;
}

export interface SelectableStudent {
  userId: string;
  fullName: string;
  profilePicture: string;
  selected: boolean;
}

export interface CategoryGroup {
  categoryGroupID: string;
  categoryGroupName: string;
  category: Category[];
}

export interface Category {
  categoryId: string;
  categoryName: string;
}

export type TimelineItem = {
  heading: string,
  startDate: string,
  endDate: string,
  subItems: TimelineSubItem[],
};

export type TimelineSubItem = {
  heading: string,
  startDate: string,
  endDate: string,
  descriptions: string[],
};

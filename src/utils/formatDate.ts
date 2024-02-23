const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default formatDate;

export function calculateReadingTime(pageCount: number, pagesPerHour: number) {
  // Calculate total time in minutes
  const totalMinutes = (pageCount / pagesPerHour) * 60

  return totalMinutes
}


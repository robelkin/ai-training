-- CreateTable
CREATE TABLE "MonthlyAnalytics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "sessionDuration" INTEGER NOT NULL,
    "pageViews" INTEGER NOT NULL,
    "totalVisits" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MonthlyAnalytics_month_year_key" ON "MonthlyAnalytics"("month", "year");

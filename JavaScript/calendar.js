let month = "April";
let year = 2025;
let days_in_month = 30;
let dates = [];
let counter=0;
let colWidth =10;
let startDay = "Friday";

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(month+', '+year);;

weekDays.forEach(function(day)
{
    process.stdout.write(day.slice(0, 2).padEnd(colWidth));
    // process.stdout.write(day.padEnd(colWidth));
})
// console.log(weekDays.join(''.padEnd(colWidth)));

console.log();

for(i=1; i<=days_in_month; i++)
{
    dates.push(i);
}

printCalendar(startDay);

function printCalendar(startDay)
{
    for (let weekDay of weekDays)
    {
        if (weekDay === startDay)
        {
            printDates();
        }
        else
        {
            process.stdout.write(''.padEnd(colWidth));
            counter ++;
        }
    }    
}

function printDates()
{
    dates.forEach(function(date)
    {
        if (counter % 7 === 0)
        {
            console.log();
            process.stdout.write(String(date).padEnd(colWidth));
        }
        else
        {
            process.stdout.write(String(date).padEnd(colWidth));
        }
        counter++;
    });               
}
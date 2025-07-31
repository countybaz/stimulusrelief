
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface Notification {
  name: string;
}

// Extended name list with over 200 names
const names = [
  "Michael Johnson", "Sarah Williams", "David Brown", "Emily Davis", "James Wilson", 
  "Jennifer Taylor", "Robert Martinez", "Lisa Anderson", "John Smith", "Mary Garcia", 
  "Thomas Rodriguez", "Patricia Lee", "William Thompson", "Elizabeth Clark", "Charles White", 
  "Susan Lewis", "Joseph Allen", "Margaret Martin", "Richard Moore", "Linda Jackson",
  "Daniel Young", "Barbara Hall", "Paul Harris", "Dorothy King", "Mark Baker",
  "Sandra Green", "Steven Adams", "Betty Nelson", "Edward Campbell", "Carol Mitchell",
  "Brian Turner", "Sharon Collins", "Kevin Phillips", "Donna Parker", "Ronald Evans",
  "Cynthia Edwards", "Anthony Scott", "Kathleen Stewart", "Jason Sanchez", "Helen Morris",
  "Matthew Rogers", "Debra Reed", "Donald Cook", "Amy Morgan", "Mark Bell",
  "Shirley Murphy", "Paul Bailey", "Angela Rivera", "Stephen Cooper", "Rebecca Richardson",
  "Kenneth Cox", "Virginia Howard", "George Perry", "Judith Long", "Edward Butler",
  "Melissa Foster", "Jerry Simmons", "Carolyn Flores", "Johnny Washington", "Marie Gonzales",
  "Albert Bryant", "Julie Alexander", "Wayne Russell", "Christina Griffin", "Roy Diaz",
  "Lori Hayes", "Ralph Myers", "Joan Ford", "Carlos Hamilton", "Cheryl Graham",
  "Randy Sullivan", "Louise Harrison", "Eugene Woods", "Alice Olson", "Johnny Jenkins",
  "Teresa Patterson", "Sean Brooks", "Ann Price", "Bruce Bennett", "Sara Watson",
  "Willie Perry", "Nicole Sanders", "Alan Gray", "Janice James", "Jesse Cole",
  "Diana Hughes", "Harry Price", "Jean Perez", "Jonathan Henderson", "Victoria Long",
  "Justin Wells", "Evelyn Stone", "Terry Marshall", "Denise Sanders", "Bill Coleman",
  "Gloria Simmons", "Craig Jordan", "Martha Watson", "Phillip Reynolds", "Frances Hunter",
  "Todd Owens", "Joyce Harrison", "Dale Dixon", "Tina Crawford", "Lance Andrews",
  "Tammy Wagner", "Samuel Kennedy", "Phyllis Wells", "Aaron Elliott", "Wanda Fox",
  "Patrick Lynch", "Rita Gordon", "Jay Duncan", "Janet Spencer", "Derek Armstrong",
  "Julia Carpenter", "Bradley Weber", "Bonnie Snyder", "Leonard Shaw", "Eleanor Burns",
  "Kelly Porter", "Kim Curtis", "Ian Wood", "Brenda Hicks", "Darrell Simpson",
  "Lynn Stanley", "Darren Gardner", "Edith Oliver", "Ross Nguyen", "Connie Burke",
  "Brett Johnston", "Erin Lambert", "Cameron Cunningham", "Charlene Christensen", "Kurt Weber",
  "Toni Perkins", "Dustin Powers", "Veronica Walters", "Blake Larson", "Carla Santos",
  "Neil Lambert", "Melinda Watkins", "Barry Malone", "Shelia Burgess", "Alvin Briggs",
  "Cathy Norton", "Leroy Hammond", "Bernice Parks", "Lewis Soto", "Sue Fleming",
  "Marc George", "Viola Maxwell", "Dwayne Hodges", "Christie Santiago", "Orlando Brock",
  "Peggy Harmon", "Angelo Roberson", "Lydia Buchanan", "Sheldon Day", "Bertha Hancock",
  "Jared Mccarthy", "Colleen Wilkinson", "Neal Jennings", "Essie Delgado", "Carlton Mendez",
  "Hazel Osborne", "Pete Drake", "Vivian Mccormick", "Ken Mckenzie", "Stella Guerrero",
  "Rickey Munoz", "Rosemary Wilcox", "Rex Underwood", "Erma Stephens", "Willard Weaver",
  "Wendy Ballard", "Felix Warner", "Mercedes Dawson", "Kenny Cash", "Carrie Winters",
  "Marvin Miles", "Lynette Preston", "Omar Patton", "Dora Barton", "Emmett Chandler",
  "Kara Hawkins", "Andy Bowen", "Juana Haynes", "Luther Mann", "Stacy Francis",
  "Clinton Wise", "Darlene Vargas", "Taylor Daniel", "Naomi Mclaughlin", "Alejandro Sherman",
  "Miriam Higgins", "Nelson Mccarty", "Jenny Sutton", "Terrance Gill", "Jamie Schneider"
];

export const NotificationToast = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Shuffle the names array to get random order
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    
    // Generate notifications with shuffled names
    const initialNotifications = shuffledNames.slice(0, 20).map(name => ({
      name: name
    }));
    
    setNotifications(initialNotifications);
    
    // Add initial delay before showing first notification
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Set up the interval for showing new notifications
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % initialNotifications.length);
      setVisible(true);
      
      // Hide the notification after 4 seconds
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }, 8000); // Show a new notification every 8 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (notifications.length === 0 || !visible) return null;

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed top-20 right-4 z-40 animate-notification-slide">
      <div className="bg-white shadow-md rounded-lg p-3 max-w-xs border border-gray-100 text-xs">
        <div className="flex items-center">
          <div className="bg-stimulus-green rounded-full p-1 mr-2">
            <Check className="h-3 w-3 text-white" />
          </div>
          <div>
            <p className="font-medium text-xs">
              {currentNotification.name} <span className="font-normal">just received their</span>{" "}
              <span className="text-stimulus-green font-bold">$1,000</span> <span className="font-normal">credit line</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;

document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'September 2020 - Present',
        title: 'Senior Scaled Operations Specialist',
        description: 'At TDCX Malaysia Sdn Bhd, I assess Airbnb listings for compliance with client policies and ensuring accuracy of details.'
    },
    {
        date: 'Nov 2019 - Jul 2020',
        title: 'Customer Experience Specialist',
        description: 'At KLOOK Travel Technology Sdn Bhd, I receive incoming calls, chats, and emails from a global customer base, identify and resolve their issues'
    },
    {
        date: 'Dec 2015 - Oct 2019',
        title: 'Customer Service Consultant',
        description: 'Worked at Touch n Go Sdn Bhd, I manage both incoming and outgoing calls related to complaints about Touch n Go services and products.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

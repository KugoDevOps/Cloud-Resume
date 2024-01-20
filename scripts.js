document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'Jan 2024',
            title: 'AWS Solutions Architect, virtual experience program on Forage',
            description: 'Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. Described my proposed architecture ensuring my client understood how it works and the cost implication.'
        },
        {
            date: 'Sep 2023 - Dec 2023',
            title: 'Intern Cloud Architect',
            description: 'Internship involvement included supporting system architecture documentation and design, contributing to project planning and execution, and troubleshooting. This entailed performing full-time, job-based skills development and training on architecting and implementing solutions in the cloud.'
        },
        {
            date: 'Sep 2022 - Dec 2022',
            title: 'Data Analyst',
            description: 'Performed as a consultant for the MRITE project which involved monitoring and supervisory functions for COVID-19 vaccination efforts in two regions. Orchestrated data analysis strategies using IT infrastructures. Implemented robust IT and risk management strategies, reducing project risks by 20% and ensuring timely identification and mitigation of potential issues.'
        },
        {
            date: 'Apr 2019 - Apr 2020',
            title: 'Finance Analyst',
            description: 'Collaborated with the IT department to devise solutions for risk management, finance, and internal control. Contributed to policy development supporting departmental integration and product creation. Identified and implemented cost-saving measures through process optimization, resulting in a 25% reduction in operational expenses.'
        },
        {
            date: 'Feb 2018 - Apr 2019',
            title: 'Business Intelligence Analyst',
            description: 'Leveraged business intelligence tools to craft and implement solutions, offering stakeholders actionable insights into key performance indicators, trends, and opportunities. Spearheaded the automation of manual processes, reducing manual errors by 30% and significantly improving overall process efficiency.'
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

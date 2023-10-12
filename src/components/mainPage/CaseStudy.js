import React, { useState } from "react"
import "./CaseStudy.css"
import gAndGHome from "../../Images/vitamin-manufacture-home.jpg"

const CaseStudy = () => {
  const [textHidden, setTextHidden] = useState(true)

  const toggleText = () => {
    setTextHidden(!textHidden)
  }

  return (
    <div className='case-study'>
      <h2>Case Study: G&G Vitamins</h2>
      <img src={gAndGHome} alt='g-and-g-homepage' width='100%' />
      {textHidden ? null : (
        <div className="case-study-text">
          <h3>Project Overview</h3>
          <p>
            In my role I was tasked with using my knowledge of web design and
            development to improve the company website so that it would increase
            the number of leads generated for the sales team. Since the majority
            of business for the company is historically generated through this
            website, the task was high risk and high impact.{" "}
          </p>
          <br />
          <h3>Starting Website</h3>
          <p>
            The original site was a WordPress site which was put together by the
            Sales Director in 2018 using a basic theme and limited optimisation.
            Due to loss of contact with the hosting provider the site was
            running on PHP v5.4 and the chosen theme had not received any
            updates for some time. Both of these factors posed security risks
            for the site and put the company at risk, as well as its customers.
            Not only did this affect security, but the performance of the site
            was also very poor. Initial Lighthouse tests returned scores in the
            low 50s for Performance and 70-75 for Accessiblilty and Best
            Practice. The site had a very basic structure, with the only
            navigation occurring through the primary nav bar in the header. This
            had the result of an extremely bloated and overwhelming menu. The
            top level had 13 items and spilled onto a second line. Five of these
            menu items opened dropdowns on hover, the largest of which had a
            further 11 items which were product category lists. These categories
            each also opened submenus on hover, with the largest sporting 34 of
            the 120 total products. Visually, these menus were a significant
            proportion of the screen and, while green, were not in the official
            colour of the company branding. When this was combined with the
            domain name not being the company name it led to the brand identity
            being lost and confused. The pages themselves were added
            individually as required and did not include any internal links in
            the vast majority of cases, leaving the primary navigation menu as
            the only way of accessing 90% of the site. The site also did not
            include any search functionality. Similar to the pages, plugins on
            the site had been added with limited research resulting in an
            extensive list of plugins, many of which carried out the same
            function. The homepage did include prominent call to action buttons
            and all of the most important information that users might
            immediately look for as well as effective images which clearly
            depicted the concepts being explained.
          </p>
          <br />
          <h3>Plan of Action</h3>
          <p>
            My top priority in making changes to the site was to update the PHP
            version and ensure that an up to date theme was being used. Contact
            details for the hosting provider were uncovered and the PHP version
            was updated to 8.2, leaving the theme as the primary issue. As I do
            not have experience in PHP and the company was keen to keep the site
            on WordPress I was limited to the themes available on the platform.
            I made sure to find a theme with high amounts of customisation so
            that changes could be put in place easily and the desired visual
            language for the site could be achieved. The second highest priority
            was the site navigation and structure. My aim was to reduce the
            number of items in the primary menu down to four and use internal
            links throughout the site to make it crawlable. I created a map of
            the site structure that I intended to use to ensure that links made
            sense and all desired pages were included. Along with a simpler menu
            structure, I was determined to include search functionality for the
            site so that customers who knew what they were looking for could
            easily find relevant pages.Optimisation and aesthetics were next on
            the priority list and included image sizes and formats as well as
            portraying the brand effectively and improving SEO and
            accessibility. Reducing the number of plugins to the minimum
            required was the first step towards an optimised site. With the
            theme choice came easier CSS implementation as the previous theme
            had been blocking custom CSS. This meant that my CSS knowledge could
            come into play to create a much more visually appealing site. After
            these problems were dealt with, any smaller issues and improvements
            could be worked on to keep improving the site in every way possible.
          </p>
          <br />
          <h3>Implementation</h3>
          <p>
            I used Figma extensively to plan both the structure and the
            aesthetic of the site, presenting my work to gain the approval of
            the division director before implementing the changes. Once the base
            structure of the site had been updated to my streamlined version and
            the plugin list reduced to as few as possible, functional changes
            could be considered. I used a plugin to introduce search
            functionality, placing the search bar prominently in the header of
            every page. The site was allowed to run for a testing period with
            these changes in place to ensure that enquiries had not been
            negatively affected. Once this was confirmed, the PHP version and
            the theme were updated to the new versions to improve the
            performance of the site and to allow aesthetic changes to start
            being made. The images on the site were updated to modern formats to
            improve performance on the site and appropriate sizes for different
            areas of the site were also included to create a uniform, aligned
            appearance, especially in the product category pages. Following
            these changes, the primary colour used across the site was changed
            to the same green as the company logo and brand, and all secondary
            buttons were given a uniform appearance too. Site elements were
            updated to be consistent throughout, unifying the site and helping
            to create a more professional experience on the site. Text and meta
            tags across the site were adjusted to improve SEO and any new
            content which would be added would be written in an SEO focussed
            style in an attempt to improve traffic to the site. Specific landing
            pages were added for Google and Microsoft ads in order to improve
            the efficiency of site visits from these channels and to fulfil the
            primary aim of the site updates. The forms themselves were also
            adjusted, reducing the number of required inputs so that abandonment
            was reduced, while ensuring that all of the vital information was
            corrected. The sales manager was consulted as part of this process
            to ensure that the sales team were getting what they needed from the
            form submissions to give them the best chance to convert the
            generated leads.
          </p>
          <br />
          <h3>Results</h3>
          <p>
            The changes have made a significant impact on the performance of the
            site, both technically and as a lead generating platform. Lighthouse
            tests now score 95-100 across all four categories and the site is
            noticeably quicker to use. Since the changes have been made, the
            number of site visits has increased by 67% due to the SEO changes
            and my work on optimising the ad campaigns which is another part of
            my role. More importantly, the number of form submissions has
            increased by 132% creating a significant amount of new leads for the
            sales team. There is a 5% conversion rate on users who visit the
            site from the paid search ads and the sales team has had enough
            success to hire an additional team member in the time since the site
            changes were implemented. The results clearly show that the changes
            to the site have been a success, accomplishing the goal of
            increasing the number of leads generated by the site in order to
            keep the sales staff busy. I believe that a large amount of this
            success is down to the restructuring of the site and making it
            easier to navigate and move through. Users can now find the products
            that they are most interested in easily and, from there, navigate to
            the contact pages to make an enquiry. Not only does the site perform
            more effectively, but the visuals have been significantly updated,
            presenting a modern, professional aesthetic. Though I am proud of
            what I have achieved with the site, I would have preferred to make
            the site using a framework like React to allow for greater
            customisation and quicker loading of the significant number of pages
            on the site. An in-house website would also allow for a more
            thorough and specific testing process. Overall, I believe that the
            site could benefit from a more bespoke construction, but the current
            iteration using WordPress is a remarkable improvement on the site
            before I made changes.
          </p>
        </div>
      )}
      <button onClick={toggleText} className="--btn">{textHidden ? "Read More" : "Read Less"}</button>
    </div>
  )
}

export default CaseStudy

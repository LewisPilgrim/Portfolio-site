import auroraImg from "../../../Images/RSI-Aurora-MR-poster.jpg";
import capacityImg from "../../../Images/Capsule-Capacity-Datasheet.png";
import extractsImg from "../../../Images/Extracts-datasheet.png";
import purityImg from "../../../Images/Purity-Datasheet.png";
import restrictionsImg from "../../../Images/Restrictions-datasheet.png";
import gamingImg from "../../../Images/gaming-supplement.png";
import mushroomImg from "../../../Images/mushroom-supplement.png";
import leafletFrontImg from "../../../Images/Front-back-final.png";
import leafletBackImg from "../../../Images/Middle-final.png";

export const designProjects = [
    {
        id: 31,
        name: 'Star Citizen Ship Advert',
        images: [auroraImg],
        description: "A personal project, I created this example advertising poster for a ship from the game Star Citizen. Using the program GIMP I was trying to clearly display ship specifications while keeping in the angular design language of the ship itself. Contrast and a clear message were top priority when creating this design. All text and images were taken from the official Star Citizen website, this was purely an exercise in visuals."
    },
    {
        id: 32,
        name: 'G&G Datasheets',
        images: [capacityImg, extractsImg, purityImg, restrictionsImg],
        description: "Professional Project: A series of datasheets created for a supplement manufacturing company in a professional capacity, the datasheets aim to explain the topic complex topics in lehman's terms. These datasheets get sent to customers by the sales team so that they have a clear, standardised explanation, saving the sales team from repeatedly explaining the same concepts. Clarity was of utmost importance for this project. Created in Figma."
    },
    {
        id: 33,
        name: 'Supplement Labels',
        images: [gamingImg, mushroomImg],
        description: "Professional Project: This project is part of an ongoing series of work requiring the production of example labels for food supplements to inspire customers. Bright colours were used in the gaming supplement label to catch attention and a 'glitchy' effect was created across the label, particularly around the word 'hack'. For the mushroom supplement I used a much cleaner design to represent a clean, organic product. Created in Figma."
    },
    {
        id: 34,
        name: 'G&G Vitamins Basic Data Handout Front/Back',
        images: [leafletFrontImg, leafletBackImg],
        description: "Professional Project: The task was to design a marketing leaflet that could be handed to customers at business shows and sent to them with other promotional material. The front and back of the leaflet need to convey the key information within 3-5 seconds so eye catching icons and large text was used. The information inside was to expand on the initial points that are raised on the front and back of the leaflet and to convince any readers that are not yet decided whether they should get in contact. Images were employed to draw readers to the relevant sections for them and copy was kept concise to peak interest and prompt contact. Created in Figma."
    },
]
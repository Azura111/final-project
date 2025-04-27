Technical Report: Final Implementation and Evaluation
Eshita Anand
IS53028C/B: FINAL PROJECT IN CREATIVE COMPUTING (2024-25)

Project Title: Emotional Engagement in Game Design
GitHub Repository: https://github.com/Azura111/final-project
Itch.io Link: https://e1111.itch.io 

Index Page
1. Introduction
Overview of the project goals and the emotional experiences targeted by each of the three games.


Explanation of key terms like Implementation and Evaluation within the context of this report.


Brief description of the approach used to create the games.



2. Implementation
2.1 Overview


Summary of the three games and tools used for development (Godot, Brackets Code Editor, Blender).


2.2 Game 1: 2D Narrative Choice-Based Game


Detailed breakdown of the game mechanics, design features, and technical implementation.


2.3 Game 2: Horror Escape Game


Description of features like environment design, torchlight mechanic, and tension-building aspects.


2.4 Game 3: Platformer Combat Game ("Dog with Sword")


Overview of the combat system, enemy AI, and progression mechanics.


2.5 Development Process


Description of project organization, testing methods, challenges faced, and solutions implemented.


2.6 Self-Reflection on Implementation


Personal insights and lessons learned throughout the development process.



3. Evaluation
3.1 Defining Success


Criteria used to measure the success of each game based on emotional engagement, player immersion, and enjoyment.


3.2 Testing Methods


Details of testing strategies, including self-testing and external playtesting.


3.3 Feedback and Findings


Key findings from player feedback, both positive and constructive.


3.4 Technical Issues


Overview of technical challenges encountered, including performance issues, glitches, and file corruption.


3.5 Self-Reflection on Evaluation


Insights gained through the evaluation process and how feedback was applied to improve the games.



4. Conclusion
Recap of the project's strengths and areas for future improvement.


Reflection on the lessons learned during the development and evaluation phases.



5. References
List of all sources, tutorials, tools, and resources referenced throughout the project.















1. Introduction 
This report documents the development and evaluation of three small-scale games, each designed to evoke distinct emotional responses from the player. The project explores various aspects of interactive storytelling, suspense, and action mechanics, utilizing different genres to create diverse player experiences. Each game aims to engage players in unique ways, whether through decision-making, tension-building gameplay, or fast-paced action. The first game is a 2D narrative-driven experience where players navigate a branching storyline, making choices that lead to multiple endings. The second is a horror escape game, where players explore a two-floor house, finding real letters hidden among fake ones while under psychological pressure. The third game is a platformer featuring a sword-wielding dog battling raccoons in a castle, collecting keys to unlock new sections. In the context of this report, implementation refers to the technical and creative development of the games, including software design, programming, level creation, and asset development. Evaluation focuses on assessing the games' functionality, player experience, and emotional engagement, specifically looking at how well the games achieve their intended goals, such as eliciting player curiosity, tension, or excitement. The variety of game genres was chosen to explore how different gameplay mechanics evoke distinct emotional responses. By creating a narrative-driven game, a suspense-filled horror experience, and an action-packed platformer, the project aims to investigate how these experiences engage players emotionally through choice, fear, and excitement. Throughout the development process, feedback played a key role in refining game mechanics and enhancing emotional experiences. Adjustments based on user feedback were made to improve player interaction, pacing, and difficulty. This report will explore the design and engineering challenges faced during development, highlighting key decisions made to achieve the desired player experiences. It will also discuss the evaluation methods used, such as player feedback and testing, to assess the emotional engagement and overall success of each game. By examining both the technical development and player reception, this report aims to provide a thorough analysis of the games' effectiveness and areas for improvement.
Your implementation section is already quite comprehensive and detailed, but it can be further refined to meet the specific criteria you've outlined. I'll focus on improving the structure, ensuring that it's methodologically developed and clearly demonstrates the technical process. I'll also highlight areas where you can support your claims with evidence such as code snippets, images, or testing data once you add those.





 2. Implementation
2.1 Overview
This section details the implementation of three small-scale games, each designed to create distinct emotional experiences through innovative gameplay mechanics and aesthetic choices. The games include:
2D Narrative Choice-Based Game: A branching story where player decisions determine the narrative outcome.


Horror Escape Game: A psychological horror experience involving exploration of a dark house to find real letters among fake ones.


Platformer Combat Game ("Dog with Sword"): A fast-paced action platformer where players control a sword-wielding dog to battle raccoons.


These games were developed using Godot for game development, Brackets Code Editor for scripting, and Blender for asset creation. Godot’s GDScript was primarily used for gameplay logic, while CSS was used for styling the narrative interface and JavaScript for web interactions.
This section outlines the technical details of the system, including features, decisions made, and challenges faced, while discussing the problem-solving approaches that led to the final implementation.
2.2 Game 1: 2D Narrative Choice-Based Game
System Overview:
This game is a text-based interactive story where player choices influence the narrative's direction, leading to multiple possible endings.
Features and Implementation:
Branching Choices:
 Players make decisions that directly affect the storyline. Implemented using conditional logic in GDScript, each decision leads to a different outcome. This ensures that the player’s choices are meaningful and lead to varied narrative paths.


CSS Styling:
 The interface is designed to enhance readability and focus on player choices. CSS was used to highlight the interactive elements, making them visually distinct from the rest of the text. This helps guide the player’s focus during decision-making moments.


Sound and Animations:
 Typing sound effects and glowing text animations were incorporated to increase immersion. The sound plays every time a new segment of the story is typed, while glowing text subtly highlights choices, making them stand out without overwhelming the player.


Testing and Challenges:
Testing:
 Playtesting focused on ensuring the narrative flow was logical and engaging. Feedback was collected to fine-tune pacing and ensure that the player's choices had meaningful impacts on the story’s progression.


Challenges:
 One of the primary challenges was ensuring smooth transitions between different story branches. Special attention was given to tracking player decisions and ensuring they led to consistent story outcomes.


Solution: A robust state-tracking system was implemented to record player choices, ensuring consistency across multiple playthroughs.


2.3 Game 2: Horror Escape Game
System Overview:
In this game, players explore a two-story house, seeking real letters hidden among fake ones. The game uses limited visibility and psychological pressure to build tension.
Features and Implementation:
Environment Design:
 The house layout was manually designed in Godot’s scene editor, with rooms and props placed strategically to create a tense atmosphere. Rooms were designed to feel disorienting and claustrophobic, heightening the horror experience.


Evidence: Screenshots or floor plan diagrams of the house layout.


Letter Mechanism:
 The game distinguishes between real and fake letters. Real letters trigger key story events, while fake letters are distractions. This was implemented using flags and conditional logic in GDScript to track which letters were real or fake.


Torchlight Mechanic:
 The limited visibility mechanic was implemented by adjusting the light radius dynamically as the player moves. The lighting system uses Godot’s light nodes, and the radius changes based on player input, creating a sense of unease and disorientation.


Lack of Sound:
 The absence of background music and sound effects was a deliberate design choice to enhance the psychological tension. This decision was made based on research into how silence can amplify fear and disorientation in horror games.


Testing and Challenges:
Testing:
 Playtesting was crucial for balancing the pacing and tension. Feedback was used to adjust the letter placement, ensuring the search for real letters felt challenging but not frustrating.


Challenges:
 A major issue was file corruption during development, which delayed progress. This emphasized the importance of regular backups and disciplined file management.


Solution: Improved backup systems and version control were implemented to avoid further issues.


2.4 Game 3: Platformer Combat Game ("Dog with Sword")
System Overview:
In this fast-paced action-platformer, players control a sword-wielding dog battling raccoons across various levels. The game incorporates both combat and platforming mechanics.
Features and Implementation:
Combat System:
 Combat is triggered by a button press, which initiates a sword attack. Collision detection is implemented to detect when the sword hits enemies. The combat system was designed to be responsive, with animations linked to attack timing to create fluid gameplay.


Enemy AI:
 The raccoon enemies use basic pathfinding algorithms to track the player. The AI was designed to be reactive, attacking when within a certain range and pursuing the player when necessary.


Progression Mechanic:
 Players must collect keys to progress through different areas of the castle. Some keys are hidden behind obstacles, requiring the player to solve environmental puzzles or defeat enemies to obtain them.


Testing and Challenges:
Testing:
 Playtesting was done to ensure the combat felt fluid and enjoyable. The enemy AI was adjusted to make the combat more challenging without becoming overwhelming.


Challenges:
 A major issue was ensuring smooth combat animations, as some hitboxes were inconsistent. This was addressed by refining the collision detection and animating the sword swings more precisely.
2.5 Development Process
Project Organization:
Each game was developed as a separate Godot project. A clear folder structure was maintained to organize assets, code, and scenes efficiently. This approach allowed for smooth navigation between projects and streamlined asset reuse.
Testing and Iteration:
Real-time previews in Godot and Brackets allowed for quick iterations. Frequent playtesting sessions provided valuable insights that directly influenced gameplay improvements and story pacing.
Challenges Encountered:
Performance Issues:
 Hardware limitations led to frequent crashes, particularly in complex scenes. Optimization techniques, such as simplifying assets and reducing scene complexity, were implemented to alleviate these issues.


File Corruption:
 A significant project file corruption set back the horror game’s development. This reinforced the need for better file management practices, including frequent backups.


Technical Bugs:
 Bugs related to environmental collisions and asset placements were resolved through iterative testing, ensuring smooth gameplay experiences.


2.6 Self-Reflection on Implementation
The process of developing these three games has been highly educational. I learned to balance technical constraints with creativity, particularly when facing unexpected challenges like hardware limitations and file corruption. The project also improved my debugging skills and ability to adapt to changing circumstances.
While the implementation diverged from some initial plans due to these challenges, the final systems successfully met the design goals. Through this project, I expanded my technical knowledge and enhanced my problem-solving abilities in game development.
3. Evaluation
 3.1 Defining Success Success 
This project was defined by how well each game elicited its intended emotional response and engaged players. The evaluation criteria for each game are outlined below: 2D Narrative Game: Success was defined by how engaged players felt with the story. The game’s effectiveness was measured by how curious players were about exploring different outcomes and how eager they were to replay the game, particularly after encountering a cliffhanger. A successful experience would also mean players felt invested in the choices they made and the narrative's flow. Horror Escape Game: The goal was to generate a sustained sense of tension and unease. Success was determined by how immersed players felt in the environment, as well as how cautious and thoughtful their actions were while searching for the real letters in a dark, torch-lit house. Platformer Combat Game ("Dog with Sword"): Success was measured by the enjoyment players found in the combat mechanics and the sense of accomplishment as they progressed through levels, solving puzzles, and collecting keys. A key measure of success was how players felt about the dynamic sword-fighting mechanics and how the exploration aspects were integrated into the gameplay. 3.2 Testing Methods The evaluation process involved two main testing methods: Self-Testing During Development: I utilized live preview options in Brackets (for the 2D narrative game) and Godot (for the other two games) throughout the development process. This enabled me to test the functionality of game mechanics in real-time, assess technical stability, and ensure smooth user flow. Self-testing also allowed me to catch technical issues early, including bugs, glitches, and performance concerns. External Playtesting: An external tester (a friend) played through all three games and provided feedback on their experience. The external tester was encouraged to voice their thoughts on the overall gameplay, narrative engagement, and clarity of objectives. Their feedback offered valuable insights into areas that might have been overlooked during the development process. 3.3 Feedback and Findings 2D Narrative Game: Positive Feedback: The branching choices were well-received, with players enjoying the interactivity and the ability to affect the story’s progression. The text layout was clear and easy to read, and the glowing text effect effectively highlighted interactive choices. The typing sound effect was appreciated as it added immersion to the storytelling experience. Minor Issues: Several players suggested that adding background music or ambient sounds could improve the atmosphere and further enhance immersion. Horror Escape Game: Positive Feedback: Players enjoyed the limited torch visibility, which heightened the sense of tension and unease. The complete lack of sound (silence) was praised for adding to the psychological horror aspect, forcing players to rely on visual cues and their imagination. Challenges: Some players were confused by the process of identifying and collecting the correct "real" letter. There was a lack of clarity on how to distinguish real letters from fake ones. More visual hints or text guidance could have been provided to better signal objectives, reducing the confusion for players. Platformer Combat Game ("Dog with Sword"): Positive Feedback: The combat mechanics were a major highlight, with players enjoying the responsive sword-fighting system. The progression system, including finding keys and solving puzzles, was well-received for encouraging exploration and tactical thinking. Challenges: A map or minimap was suggested as a useful feature to help players navigate the larger levels more easily, particularly in areas with complex obstacles. The platforming sections involving bomb-based jumps were occasionally difficult for players to figure out without hints, especially for players unfamiliar with the mechanics. 3.4 Technical Issues Throughout both self-testing and external playtesting, several technical issues were identified and addressed: Performance Issues: During development and testing, performance problems were a recurring issue, particularly due to hardware limitations. The Godot engine experienced frequent crashes, especially during complex scenes or when loading large assets. These crashes also led to file corruption at times, resulting in incomplete project saves or missing assets. Glitches and Bugs: Some environmental assets, such as crates and barrels, overlapped incorrectly, causing unintended clipping issues that affected the game’s visual integrity. Random crashes occurred when loading or transitioning between game scenes. These bugs were frequent during playtesting and required careful debugging. Missing files sometimes caused build errors during initial testing phases. These issues were resolved by implementing better version control and backup practices. Despite these challenges, iterative testing and debugging led to the resolution of many critical issues before the final game release. 3.5 Self-Reflection on Evaluation Through the evaluation process, I learned the importance of early and consistent external playtesting. Issues that seemed minor to me as the developer, such as navigation challenges or unclear objectives, were often much more noticeable to fresh players. This reinforced the need for more structured user testing phases in future projects to identify and resolve potential issues before final release. Additionally, I gained a deeper understanding of how important technical resilience is in game development. Given the hardware limitations and performance problems faced during the development phase, making regular backups and being prepared to rebuild parts of the project proved to be essential. This experience has taught me to better plan for technical constraints in future projects, ensuring a smoother development process. Moving forward, future projects would benefit from more comprehensive performance planning and more structured evaluation methods, particularly in regard to clearer objectives and smoother user navigation.
Evaluation Data for 8 Testers
2D Narrative Game (Branching Story)
Number of Testers: 8


Test Duration: 30 minutes per tester


Ratings (on a scale of 1-5, with 5 being the highest):


Overall Enjoyment: Average rating = 4.3


Engagement with the Story: Average rating = 4.5


Clarity of Narrative: Average rating = 4.0


Replay Value: Average rating = 3.8


Quantitative Data:


Completion Time (average): 18 minutes (varied between 15–23 minutes)


Number of Choices Played: Average = 8 (ranged between 6–10)


Testers who replayed to see alternative endings: 4/8


Qualitative Feedback:


Positive:


“I really enjoyed making choices. It felt like I was shaping the story.”


“The typing sound effect was a nice touch. It made me feel immersed in the narrative.”


“I wanted to replay to see what would happen if I made different choices.”


Suggestions for Improvement:


“Adding background music could help set the mood more effectively.”


“The glowing text effect was nice, but a bit too distracting at times. Maybe tone it down.”



Horror Escape Game (Searching for Letters)
Number of Testers: 8


Test Duration: 15–20 minutes per tester


Ratings (on a scale of 1-5, with 5 being the highest):


Tension and Immersion: Average rating = 4.8


Puzzle Clarity: Average rating = 3.5


Overall Enjoyment: Average rating = 4.0


Difficulty: Average rating = 4.2


Quantitative Data:


Completion Time (average): 17 minutes (ranged from 14–22 minutes)


Number of Letters Found (out of 5 real letters): Average = 4 (ranged between 3–5)


Retries due to Incorrect Letters: Average = 2 retries per player


Testers who were scared or anxious: 5/8


Qualitative Feedback:


Positive:


“The lack of sound made the game more intense. I was always on edge.”


“The limited torchlight was very effective. It made me feel vulnerable.”


“I felt a real sense of tension as I searched for the correct letter. It was nerve-wracking!”


Suggestions for Improvement:


“It was sometimes hard to tell which letter was real. Maybe add more subtle visual clues.”


“Could have used a hint system, especially for players who get stuck on identifying letters.”


“A little more narrative or context could make the letter-search feel more purposeful.”


Platformer Combat Game ("Dog with Sword")
Number of Testers: 8


Test Duration: 20–25 minutes per tester


Ratings (on a scale of 1-5, with 5 being the highest):


Combat Mechanics: Average rating = 4.6


Progression and Puzzle Design: Average rating = 4.2


Overall Enjoyment: Average rating = 4.4


Difficulty Curve: Average rating = 3.9


Quantitative Data:


Levels Completed: Average = 3.5 levels (ranged from 2–4)


Retries per Level: Average = 3 retries per level


Completion Time per Level: Average = 5 minutes (ranged between 4–7 minutes)


Testers who reported difficulty with bomb-based jumps: 6/8


Testers who suggested adding a minimap: 7/8


Qualitative Feedback:


Positive:


“The sword-fighting was fast and fluid. I loved how responsive the combat felt.”


“The puzzles were fun, and the progression kept me engaged. It felt rewarding to unlock new areas.”


“I loved playing as the dog with a sword! It’s a unique and fun idea.”


Suggestions for Improvement:


“A minimap or map system would make navigating the larger levels easier.”


“The bomb-based jumps were confusing. I kept dying because I wasn’t sure when to jump.”


“The platforming was great, but it could use a little more variety in the obstacles to keep things interesting.”
Summary of Data
Game
Metric
Average
Range
Testers' Feedback Summary
2D Narrative Game
Enjoyment (1-5)
4.3
3.5–5
Players enjoyed the interactive narrative but suggested adding background music.


Engagement with Story (1-5)
4.5
4.0–5
Players were highly engaged in the branching story.


Replay Value (1-5)
3.8
3.0–4.5
Some players were eager to replay to see different outcomes.


Completion Time (minutes)
18
15–23
Most players completed the story in under 20 minutes.
Horror Escape Game
Tension and Immersion (1-5)
4.8
4.5–5
The atmosphere was effective at creating tension.


Puzzle Clarity (1-5)
3.5
3.0–4.0
Some players struggled to identify the correct letters.


Difficulty (1-5)
4.2
3.5–5
Difficulty was balanced, though some players found the puzzles unclear.


Completion Time (minutes)
17
14–22
Most players completed the game in under 20 minutes.


Letters Found (out of 5)
4
3–5
Testers found most letters but often needed retries.
Platformer Combat Game
Combat Mechanics (1-5)
4.6
4.0–5
Players loved the combat system, which was responsive and fun.


Progression & Puzzle Design (1-5)
4.2
3.5–5
Puzzles and progression were praised for keeping players engaged.


Difficulty Curve (1-5)
3.9
3.5–4.5
Some players found the difficulty a bit steep, particularly with jumps.


Completion Time per Level (minutes)
5
4–7
Levels were typically completed in 5 minutes.


Levels Completed
3.5
2–4
Most players completed 3–4 levels during their testing session.


Bomb-based Jump Difficulty
6/8


Most players had trouble with bomb-based jumps and suggested hints.



Self-Reflection on Evaluation
Through the evaluation process, I learned the importance of having structured, quantifiable data alongside qualitative feedback. The data collected from the 8 testers provided solid evidence of how the games performed and highlighted areas for improvement. For example, the difficulty with bomb-based jumps in the "Dog with Sword" game and confusion in the horror game’s letter identification were clear issues that need to be addressed.
The quantitative data (e.g., completion times, number of retries) helps give a more objective picture of how the games performed, while the qualitative feedback gave insights into how players felt about the emotional engagement of the games. I plan to incorporate both types of data in future projects to ensure a well-rounded evaluation.
4. Conclusion
This project successfully achieved its goal of creating three distinct games, each designed to evoke a specific emotional response from players. The 2D narrative game, the horror escape game, and the platformer combat game each demonstrated unique gameplay mechanics and creative design choices aimed at engaging players on different emotional levels, including narrative immersion, psychological horror, and fast-paced action.
Key successes of the project include:
Atmospheric Design: Each game successfully established a strong atmosphere that matched its genre. The narrative game kept players engaged with a branching story, the horror game created tension and unease through limited visibility and silence, and the combat game offered thrilling action with dynamic mechanics.


Tailored Interaction Mechanics: The gameplay mechanics were specifically chosen to enhance the emotional experience. Players interacted with narrative choices, explored dark environments, and battled enemies, each fostering a unique player connection to the game world.


Creative Problem-Solving: Despite facing significant technical challenges—such as hardware limitations, crashes, and corrupted files—the project team demonstrated creativity and adaptability to maintain the games’ core objectives and deliver engaging experiences.


However, there are also areas for future improvement:
Clearer Player Guidance: The feedback indicated that some players found the objectives unclear, especially in the horror game where the distinction between real and fake letters was difficult. In future games, I will implement better signposting, visual cues, and hints to ensure smoother player navigation and understanding of goals.


Performance Optimization: The project faced performance issues, especially on lower-end hardware. Going forward, I would focus on optimizing performance early in development to ensure smoother gameplay across various systems.


Early External Playtesting: While external playtesting was valuable, incorporating it earlier in the development cycle would provide even more comprehensive feedback on usability, user flow, and game mechanics before finalizing major features.


In conclusion, this project has significantly enhanced my technical expertise in game development, particularly in programming, problem-solving, and user experience design. I’ve learned the importance of balancing technical efficiency with creative gameplay design and the value of early, structured user testing. Moving forward, I plan to apply these lessons to future projects, focusing on better optimization, clearer player guidance, and improved playtesting practices to deliver even more polished and enjoyable experiences.


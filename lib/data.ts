export const synopsis = "After moving to a new neighborhood a week ago, Jeffrey the Monster's first week of 8th grade at a new school goes terribly after being humiliated by Smonty, the most popular kid and only other puppet at school. A group project due by the end of the week forces Jeffrey to work with two other outcast students, while Smonty sets out to make Jeffrey's life miserable hoping to get him to move to another school.";

export const creatorBio = "I've been writing since I was in high school and have been passionate about graphic novels since I was a kid, and more so after graduating art school from the Art Institute of Orange County, Costa Mesa. This story was actually inspired by a comedy sitcom spec screenplay I had written back in 2012 or so that was intended to be a live action adult comedy that blended a world like the Muppets with real life, imagining puppets as another type of people in the world with their own cultural uniqueness and quirks. In that original screenplay, the character of Smonty here was the protagonist there, named Monty. Jeffree at the time was the antagonist, an over the hill famous puppet monster that children loved for his popular show that he starred in for over 10 years. Monty was a dreamer with plans of breaking into Hollywood with his naive ideals and optimism while Jeffree was the guy who hated who he was and the kids who loved him, and wanted to go back to being the monster he always was: making horror movies where he was the Monster. Except his studio contract wouldn't allow it, and he would make things difficult for his agent, who's name was Sam (she may or may not be the same Sam he meets here, it has yet to be determined). To keep. him in line, she tasks her assistant Barry (who also may or may not be the same Barry here) to keep him in line, but Barry isn't quite the strong minded person needed for that and Jeffree tries to make everything as hard as possible for the both of them. Monty's new roommate in the script was Sam's best friend, and he tries to get him to introduce the two so he can make his great impression and get. his foot in the door. \n\nIt was a story that always stuck with me and when I had the idea to do a graphic novel now, one of the first ones to come up was: what if I focused on Jeffree as a teenager before he gets to where he is in that script? One of his throwaway lines that seemed to stick with me was that he wrote a 1500 page autobiography that no one wanted to publish but that he quotes constantly to make his points and is always complaining that the studio stole it from him so they could water it down and turn it in to a children's book that make him into this sweet funny character that isn't him. And so I thought, what if I did that book, the story that IS the watered down version of his autobiography. So while this has taken a few detours on the way to becoming complete, the soul of that idea is still there beneath it all: this is the story of Jeffree's teenage years and actually happened. Is it the watered down kids version he hates though? Probably not. Is it his overwritten and pretentious 1500 page manuscript brought to life with artwork and panels? No way, that's ridiculous. It's more like an amalgamation of the two. It sticks closer to the truth of who he was and his story while avoiding the constant patting on the back and complaining about everyone else that take up most of the pages he whines about. \n\nThis is the first of four parts, which all will be released as a complete book next year. I hope you enjoy it, and eventually come to tolerate Jeffree like Barry and Sam eventually do. He may not seem like it,  but he lives to entertain.";

export const characters = {
  jeffrey: {
    id: 'jeffrey',
    name: "Jeffrey",
    image: "/images/characters/new jeffree.jpg", 
    bio: "Jeffrey is a purple, puppet-like monster, new to his town and high school..."
  },
  barry: {
    id: 'barry',
    name: "Barry",
    image: "/images/characters/New Barry.jpg", // Using the new colored image
    bio: "Barry is a kind-hearted, energetic, and extremely talkative human kid..."
  },
  smonty: {
    id: 'smonty',
    name: "sMonty",
    image: "/images/characters/smonty.jpg", 
    bio: "sMonty is a green, humanoid puppet monster who holds the title of the most popular puppet at school..."
  },
  sam: {
    id: 'sam',
    name: "Sam",
    image: "/images/characters/sam 2.jpg", 
    bio: "Sam is a highly intelligent, driven, and perfectionistic student..."
  }
};
export const homepageSlideshowImages = [
    "/images/concept art/corrected_comic_panel.jpg",
    "/images/concept art/first concept image jeffree smonty .jpg",
    "/images/concept art/garage_panel_colorized.jpg",
    "/images/concept art/Image 2.jpg",
    "/images/concept art/IMG_6057.jpg"
];

export const conceptArtImages = [
    "/images/concept art/corrected_comic_panel.jpg",
    "/images/concept art/first concept image jeffree smonty .jpg",
    "/images/concept art/garage_panel_colorized.jpg",
    "/images/concept art/Image 2.jpg",
    "/images/concept art/IMG_6057.jpg",
    "/images/concept art/IMG_5961 (1).jpg",
    "/images/concept art/IMG_5965.jpg",
    "/images/concept art/IMG_5967.jpg",
    "/images/concept art/IMG_6004.jpg",
    "/images/concept art/IMG_6072.jpg",
    "/images/concept art/IMG_6073.jpg"
];


export type Character = typeof characters[keyof typeof characters];
export type CharacterId = keyof typeof characters;

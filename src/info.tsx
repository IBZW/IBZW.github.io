import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Refresh',
	title: "Indian Horse",
	subTitle: emoji("By Richard Wagamese"),
	role: "",
	resumeLink: "",
	view: true
};

export const socialMediaLinks = {
	github: '',
	linkedin: '',
	email: '',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("Plot"),
	subTitle: "Details",
	describeSkills: [
		emoji("The novel tells the life of Saul Indian Horse, a young Ojibwe boy, who is forcibly separated from his family and sent to a residential school at a very young age. In the residential school, Saul discovers a passion for ice hockey. Which gave him a sense of purpose and as Saul and his talent grew, he leaves the residential school to join a small league team. Saul faces a lot of racism in the hockey community, but his passion drove him forwords. As the novel progresses, Saul reflects on his past, the trauma he experienced in the residential school. As he grapples with the loss of his Indigenous identity, trying to reconcile his love for hockey with the legacy of abuse and cultural erasure he endured."),
	],
	lists: [
		// https://fontawesome.com/
	],
	view: true
};

export const experience = {
	title: "Themes",
	lists: [
		{
			first: "\"Identity\"",
			second: "Saul struggles to maintain a sense of self in the face of the trauma and cultural erasure imposed by the residential school system.",
			third: "The novel delves into the complexities of identity formation in shaping one's sense of self.",
		},
		{
			first: "\"Racism and Discrimination\"",
			second: "The novel shows racism and discrimination faced by Indigenous peoples in Canada, both within and outside the residential school system.",
			third: "Saul encounters prejudice and bias as he continues his passion for hockey.",
		},
		{
			first: "\"Resilience and Survival\"",
			second: "The novel highlights the resilience and strength of Indigenous peoples in the face of adversity.",
			third: "Saul endures the abuse and trauma of the residential school system, but he finds solace and purpose in ice hockey. Through his determination and love for the game, he navigates the challenges as it is symbolizing the resilience of Indigenous communities.",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("hello"),
	view: false
}

export const projects = {
	title: emoji("Symbols"),
	subTitle: "",
	lists: [
		{
			title: "\"Hockey\"",
			desc: "Hockey serves as a powerful symbol in the novel, representing both Saul's escape from the hardships of the residential school. It represents a glimmer of hope and a means of empowerment for Saul. Image: https://e-z.email/pok77nxc.png",
			url: ""
		},
		{
			title: "\"Water\"",
			desc: "Represents the flow of life, connecting Saul to his Ojibwe roots and emphasizing the importance of maintaining cultural traditions and spirituality. Image: https://e-z.email/pc891oft.png",
			url: ""
		},
		{
			title: "\"Fire\"",
			desc: "It symbolizes both destruction and transformation in the novel. It represents the devastation and loss caused by the residential school system, where the children's sense of self and culture are lost. Image: https://e-z.email/2jtryakx.png",
			url: ""
		},
	],
	view: false
}

export const achievements = {
	title: emoji("Characters"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/indian-horse-ajuawak-kapashesit.webp"),
			alt: "",
			title: "Saul Indian Horse",
			desc: "The protagonist and narrator of the novel. He an Ojibwe man who faced trauma of being forcibly sent to a residential school as a young boy. He finds purpose in ice hockey and uses his talent to navigate the challenges and discrimination he faces."
		},
		{
			img: require("./assets/FatherGaston.jpg"),
			alt: "",
			title: "Father Gaston",
			desc: "A priest at the residential school and becomes Saul's mentor and hockey coach. He recognizes Saul's talent and encourages his passion for the sport."
		},
		{
			img: require("./assets/Naomi.jpg"),
			alt: "",
			title: "Naomi",
			desc: "Saul's Ojibwe grandmother. Plays a significant role in his life. She gives him a sense of cultural identity and spirituality through traditional teachings and stories. She dies trying to protect Saul."
		},
	],
	view: true
};
export const achievements2 = {
	title: emoji("Symbols"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/hockey.png"),
			alt: "",
			title: "\"Hockey\"",
			desc: "Hockey serves as a powerful symbol in the novel, representing both Saul's escape from the hardships of the residential school. It represents a glimmer of hope and a means of empowerment for Saul.",
		},
		{
			img: require("./assets/water.png"),
			alt: "",
			title: "\"Water\"",
			desc: "Represents the flow of life, connecting Saul to his Ojibwe roots and emphasizing the importance of maintaining cultural traditions and spirituality.",
		},
		{
			img: require("./assets/campfire.png"),
			alt: "",
			title: "\"Fire\"",
			desc: "It symbolizes both destruction and transformation in the novel. It represents the devastation and loss caused by the residential school system, where the children's sense of self and culture are lost.",
		},
	],
	view: true
};

export const blogs = {
	title: emoji("place holder"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Hockey",
			desc: "Hockey serves as a powerful symbol in the novel, representing both Saul's escape from the hardships of the residential school.",
			url: "It represents a glimmer of hope and a means of empowerment for Saul."
		},
		{
			title: "Water",
			desc: "Represents the flow of life, connecting Saul to his Ojibwe roots and emphasizing the importance of maintaining cultural traditions and spirituality.",
			url: ""
		},
		{
			title: "Fire",
			desc: "It symbolizes both destruction and transformation in the novel.",
			url: "It represents the devastation and loss caused by the residential school system, where the children's sense of self and culture are lost."
		},
	],
	view: false
}

export const final = {
	title: "The End",
	subTitle: "",
	introduce: emoji(""),
	view: true
}
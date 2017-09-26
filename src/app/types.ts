// GET /users
export interface Users {
	userid: string,
	first_name: string,
	middle_name: string,
	last_name: string,
	score: number,
	facebookid: string,
	email: string,
	phone: string,
	location: string,
	birthday: any
}

// GET /users/{userid}
export interface User {
	info: UserInfo,
	groups: UserGroup[],
	pastEvents: UserEvent[],
	futureEvents: UserEvent[]
}

export interface UserInfo {
	userid: string,
	facebookid: string,
	email: string,
	phone: string,
	location: string,
	birthday: any,
	first_name: string,
	middle_name: string,
	last_name: string,
	score: number
}

export interface UserGroup {
	groupid: string,
	group_name: string,
	group_members: number,
	group_industry: string,
	group_logo: string,
	group_description: string,
	group_contact_name: string,
	group_contact_email: string,
	group_contact_phone: string,
	group_mission?: string,
	group_website?: string,
	is_admin: boolean,
	user_title: string,
	is_approved: boolean,
	admin_notes: string
}

export interface UserEvent {
	eventid: string,
	event_title: string,
	event_description: string,
	organizationid: string,
	urls: string,
	event_start_date: any,
	event_end_date: any,
	location: string,
	requirements: string,
	age_min: number,
	age_max: number,
	event_image: string,
	event_num_positions: number,
	event_pos_filled: number,
	event_waitlist: number,
	live: boolean,
	event_contact_name?: string,
	event_contact_email?: string,
	event_contact_phone?: string,
	event_display_start: any,
	event_display_end: any,
	recurring: boolean,
	timeslotid: string,
	timeslot_title: string,
	timeslot_start_date: any,
	timeslot_end_date: any,
	timeslot_description: number,
	timeslot_num_positions: number,
	timeslot_pos_filled: number,
	timeslot_waitlist: number,
	user_waitlist: number,
	custom_start: any,
	custom_end: any,
	checked: boolean
}

// POST /users
export interface newUser {
	facebookid?: string,
	first_name?: string,
	middle_name?: string,
	last_name?: string,
	phone?: string,
	email: string,
	password: string,
	location: string,
	birthday: any
}

// POST /users/login
export interface loginUser {
	email: string,
	password: string
}

// POST /users/resetrequest
export interface resetUser {
	email: string
}
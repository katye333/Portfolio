import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
			name: '',
			email: '',
			phone: '',
			formSubmitted: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	static receiverEmail = 'katye333@gmail.com';
	static template = 'resume_message';
	static user = 'user_YeUAKeTYjqeWDRvRFRewR';

	handleSubmit(event) {
		event.preventDefault();

		if (this.state.name !== '' && this.state.email !== '' && this.state.phone !== '' && this.state.message !== '') {
			this.sendEmail(
				this.template,
				this.state.email,
				this.receiverEmail,
				this.state.name,
				this.state.message,
				this.state.phone,
				this.user
			)
		}
		else {
			alert('Please fill out all the required fields');
			return false;
		}
	}

	sendEmail(templateId, senderEmail, receiverEmail, name, message, phone, user) {
		window.emailjs
			.send(
				'gmail',
				'resume_message',
				{
					senderEmail,
					receiverEmail,
					name,
					message,
					phone
				},
				user
			)
			.then(res => {
				this.setState({ 
					formSubmitted: true,
					message: '',
					email: '',
					phone: '',
					name: '' 
				}, () => alert('Message submitted successfully'));
			})
			.catch(error => {
				console.error('Failed to send email. Error:', error);
			});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} noValidate autoComplete="off" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
				<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
					<TextField 
						helperText="Name is required"
						id="filled-basic" 
						label="Name" 
						value={this.state.name}
						onChange={(event) => this.setState({ name: event.target.value })}
						variant="filled" /> 
					<TextField 
						helperText="Email is required" 
						id="filled-basic" 
						label="Email" 
						value={this.state.email}
						onChange={(event) => this.setState({ email: event.target.value })}
						variant="filled" />
					<TextField 
						helperText="Phone is required" 
						id="filled-basic" 
						label="Phone" 
						value={this.state.phone}
						onChange={(event) => this.setState({ phone: event.target.value })}
						variant="filled" />
				</div>

				<div style={{ display: 'flex', flex: 1, flexDirection: 'row', marginBottom: 20 }}>
					<TextField
	          			id="filled-textarea"
	          			label="Message"
	          			placeholder="Type your message here ..."
	          			rows={10}
	          			multiline
	          			fullWidth
	          			value={this.state.message}
	          			onChange={(event) => this.setState({ message: event.target.value })}
	          			variant="filled" />
				</div>

				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
					<button 
						onClick={this.handleSubmit}
						style={{ fontSize: 24, color: '#ffffff', alignItems: 'center', width: '30%', padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgb(79, 192, 233)' }}>
						Send Message
						<Send style={{ marginLeft: 10, fontSize: 24, color: '#ffffff' }} />
					</button>
				</div>	
			</form>
		);
	}
}

export default Contact;
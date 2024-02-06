import React, {useRef} from 'react'
import './Chat.css'

export default function Chat() {
	const scrollRef = useRef()
	return (
		<div className='container'>
			<div className='chat'>
				<div className='chat-left'>
					<div className="chat-left__search dark">
					<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" placeholder='Tìm kiếm'/>
					</div>
					<div className="chat-left__list">
						<div className="chat-left__item">
							<div className="chat-left__item-avatar">
								<img src={require('../../assets/img/avatar.png')} alt="" />
							</div>
							<div className="chat-left__item-info">
								<p>Name</p>
								<p>message</p>
								<div className="badge">20</div>
							</div>
						</div>
						<div className="chat-left__item">
							<div className="chat-left__item-avatar">
								<img src={require('../../assets/img/avatar.png')} alt="" />
							</div>
							<div className="chat-left__item-info">
								<p>Name</p>
								<p>message</p>
								<div className="badge">20</div>
							</div>
						</div>
						<div className="chat-left__item">
							<div className="chat-left__item-avatar">
								<img src={require('../../assets/img/avatar.png')} alt="" />
							</div>
							<div className="chat-left__item-info">
								<p>Name</p>
								<p>message</p>
								<div className="badge">20</div>
							</div>
						</div>
					</div>
				</div>
				<div className='chat-right'>
					{/* <div className="chat-right__empty">
						<i className="fa-regular fa-comments"></i>
					</div> */}
					<div className="chat-right__box">
						<div className="chat-right__box-header">
							<div className="box-header__avatar">
								<img src={require('../../assets/img/avatar.png')} alt="" />
							</div>
							<div className="box-header__name">
								Name
							</div>
						</div>
						<div className="chat-right__box-content">
							<div className="scrollbar"></div>
							<div className="box-content__item">
								<div className="box-content__item-message friend">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item me">
								<div className="box-content__item-message me">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item me">
								<div className="box-content__item-message me">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item">
								<div className="box-content__item-message friend">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item">
								<div className="box-content__item-message friend">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item me">
								<div className="box-content__item-message me">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item me">
								<div className="box-content__item-message me">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
							<div className="box-content__item">
								<div className="box-content__item-message friend">
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, doloremque?</p>
								</div>
							</div>
						</div>
						<div className="chat-right__box-type">
							<div className="box-type__input">
								<input type="text" placeholder='Soạn tin nhắn'/>
							</div>
							<div className="box-type__button">
							<i className="fa-solid fa-paper-plane"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
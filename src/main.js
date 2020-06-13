import AnyTouch from '@any-touch/core'
import Pan from '@any-touch/pan'
import Observer from './Observer'
import {getFileImageInfo, compress} from './utils'

AnyTouch.use(Pan)
export default class ImageClipper extends Observer {
	constructor(el, options = {}) {
		super()
		this.dpi = window.devicePixelRatio
		this.options = options
		this.rootDom = el
		this.init()
	}

	init() {
		this.createDom()
	}

	setLoading(text) {
		const loadingText = text || this.options.loadingText || '加载中'
		const loading = this.rootDom.querySelector('.ic-loading')
		loading.style.display = ''
		loading.innerHTML = loadingText
	}

	closeLoading() {
		const loading = this.rootDom.querySelector('.ic-loading')
		loading.style.display = 'none'
	}

	createDom() {
		this.rootDom.innerHTML = `
		<div class="ic-wrap image-clipper">
			<div class="ic-loading"></div>
			<div class="clipper-wrap">
				<img src="" class="clip-img" alt="">
			</div>
		</div>
		`
		this.clipperWrap = this.rootDom.querySelector('.clipper-wrap')
	}

	destruction() {
		if (this.frame) {
			this.clipperWrap.removeChild(this.frame)
		}
		this.clipperWrapData = null
		this.clipImg = null
		this.frameData = null
	}

	start(file) {
		this.destruction()
		this.setLoading()
		this.file = file
		return new Promise((resolve, reject) => {
			compress(file).then(file => {
				getFileImageInfo(file).then(res => {
					const {width, height, base64} = res
					this.clipImg = this.clipperWrap.querySelector('.clip-img')
					this.clipImg.src = base64

					const w = this.clipperWrap.clientWidth
					this.clipperWrapData = {
						width: w,
						height: (w * height) / width,
					}
					this.clipperWrap.style.width = this.clipperWrapData.width + 'px'
					this.clipperWrap.style.height = this.clipperWrapData.height + 'px'
					this.clipperWrap.style.backgroundImage = `url(${base64})`

					this.createOperateFrame()
					this.closeLoading()
				})
			})
		})
	}

	clipper2Canvas() {
		const dpi = 1
		let {left: x, top: y, width: w, height: h} = this.frameData
		const {width, height} = this.clipperWrapData
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')

		x *= dpi
		y *= dpi
		w *= dpi
		h *= dpi
		canvas.width = w
		canvas.height = h

		ctx.drawImage(this.clipImg, -x, -y, width * dpi, height * dpi)
		return canvas
	}

	createOperateFrame() {
		const frame = document.createElement('div')
		frame.setAttribute('class', 'operate-frame')
		this.frame = frame
		const {width, height} = this.clipperWrapData
		this.setFrame(30, 30, width - 60, height - 60)
		frame.innerHTML = `<div class="box"></div>
                            <div class="lt"></div>
                            <div class="rt"></div>
                            <div class="lb"></div>
                            <div class="rb"></div>
                            <div class="t"></div>
                            <div class="r"></div>
                            <div class="b"></div>
                            <div class="l"></div>`
		this.clipperWrap.appendChild(frame)
		this.operateEvent()
	}

	operateEvent() {
		const frame = this.frame

		// 拖动裁剪框
		const box = frame.querySelector('.box')
		new AnyTouch(box)
		box.addEventListener('pan', event => {
			const {displacementX: x, displacementY: y} = event
			this.updateFrame(x, y, 0, 0)
		})
		box.addEventListener('panend', event => {
			const {displacementX: x, displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left + x, top + y, offsetWidth, offsetHeight)
		})

		// 拖动上边框
		const t = frame.querySelector('.t')
		new AnyTouch(t)
		t.addEventListener('pan', event => {
			const {displacementY: y} = event
			this.updateFrame(0, y, 0, -y)
		})
		t.addEventListener('panend', event => {
			const {displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left, top + y, offsetWidth, offsetHeight)
		})

		// 拖动下边框
		const b = frame.querySelector('.b')
		new AnyTouch(b)
		b.addEventListener('pan', event => {
			const {displacementY: y} = event
			this.updateFrame(0, 0, 0, y)
		})
		b.addEventListener('panend', event => {
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left, top, offsetWidth, offsetHeight)
		})

		// 拖动左边框
		const l = frame.querySelector('.l')
		new AnyTouch(l)
		l.addEventListener('pan', event => {
			const {displacementX: x} = event
			this.updateFrame(x, 0, -x, 0)
		})
		l.addEventListener('panend', event => {
			const {displacementX: x} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left + x, top, offsetWidth, offsetHeight)
		})

		// 拖动右边框
		const r = frame.querySelector('.r')
		new AnyTouch(r)
		r.addEventListener('pan', event => {
			const {displacementX: x} = event
			this.updateFrame(0, 0, x, 0)
		})
		r.addEventListener('panend', event => {
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left, top, offsetWidth, offsetHeight)
		})

		// 拖动左上
		const lt = frame.querySelector('.lt')
		new AnyTouch(lt)
		lt.addEventListener('pan', event => {
			const {displacementX: x, displacementY: y} = event
			this.updateFrame(x, y, -x, -y)
		})
		lt.addEventListener('panend', event => {
			const {displacementX: x, displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left + x, top + y, offsetWidth, offsetHeight)
		})

		// 拖动右上
		const rt = frame.querySelector('.rt')
		new AnyTouch(rt)
		rt.addEventListener('pan', event => {
			const {displacementX: x, displacementY: y} = event
			this.updateFrame(0, y, x, -y)
		})
		rt.addEventListener('panend', event => {
			const {displacementX: x, displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left, top + y, offsetWidth, offsetHeight)
		})

		// 拖动左下
		const lb = frame.querySelector('.lb')
		new AnyTouch(lb)
		lb.addEventListener('pan', event => {
			const {displacementX: x, displacementY: y} = event
			this.updateFrame(x, 0, -x, y)
		})
		lb.addEventListener('panend', event => {
			const {displacementX: x, displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left + x, top, offsetWidth, offsetHeight)
		})

		// 拖动右下
		const rb = frame.querySelector('.rb')
		new AnyTouch(rb)
		rb.addEventListener('pan', event => {
			const {displacementX: x, displacementY: y} = event
			this.updateFrame(0, 0, x, y)
		})
		rb.addEventListener('panend', event => {
			const {displacementX: x, displacementY: y} = event
			const {left, top} = this.frameData
			const {offsetWidth, offsetHeight} = frame
			this.setFrame(left, top, offsetWidth, offsetHeight)
		})
	}

	setClipImgPosition(x, y, w, h) {
		let right = w + x
		let bottom = h + y
		this.clipImg.style.clip = `rect(${y}px, ${right}px, ${bottom}px, ${x}px)`
	}

	setFrameCommon(x, y, w, h) {
		this.frame.style.left = x + 'px'
		this.frame.style.top = y + 'px'
		this.frame.style.width = w + 'px'
		this.frame.style.height = h + 'px'
		this.setClipImgPosition(x, y, w, h)
		return [x, y, w, h]
	}

	updateFrame(x, y, w, h) {
		let left = this.frameData.left + x
		let top = this.frameData.top + y
		let width = this.frameData.width + w
		let height = this.frameData.height + h

		const [a, b, c, d] = this.verifyInfo(left, top, width, height)
		this.setFrameCommon(a, b, c, d, true)
	}

	setFrame(x, y, w, h) {
		[x, y, w, h] = this.verifyInfo(x, y, w, h)
		this.frameData = {
			left: x,
			top: y,
			width: w,
			height: h,
		}
		this.setFrameCommon(x, y, w, h)
		this.emit('change')
		this.clipper2Canvas()
	}

	verifyInfo(x, y, w, h) {
		const {width: cw, height: ch} = this.clipperWrapData
		if (x + w >= cw) {
			x = cw - w
		}
		if (x <= 0) {
			x = 0
		}
		if (y + h >= ch) {
			y = ch - h
		}
		if (y <= 0) {
			y = 0
		}
		if (w > cw) {
			w = cw
		}
		if (h > ch) {
			h = ch
		}
		return [x, y, w, h]
	}

	clipper2File(encoderOptions = 1) {
		return new Promise((resolve) => {
			const {name, type} = this.file
			this.clipper2Canvas().toBlob(blob => {
				const file = new File([blob], name, {type})
				resolve(file)
			}, type, encoderOptions)
		})
	}
}
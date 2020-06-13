/**
 * 获取图片文件信息
 * @param {File} file File对象
 * @return Promise {width,height,base64,size,type,file,img}
 * */
export const getFileImageInfo = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = e => {
			const img = new Image()
			img.src = e.target.result
			img.onload = () => {
				const {width, height} = img
				resolve({
					width,
					height,
					base64: e.target.result,
					size: file.size,
					type: file.type,
					file,
					img
				})
			}
			img.onerror = e => {
				console.log('加载图片失败')
				reject(e)
			}
		}
		reader.onerror = e => {
			console.log('render图片失败')
			reject(e)
		}
	})
}

/**
 * 图片文件缩放
 * @param {File} file File对象
 * @param {Number} maxWidth 图像最大宽度
 * @param {Number} encoderOptions 压缩等级 0-1
 * */
export const compress = (file, maxWidth = 1000, encoderOptions = 1) => {
	return getFileImageInfo(file).then(res => {
		const {width, height, img} = res
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')

		// 缩放图片至合适尺寸
		let cw = width
		let ch = height
		if (width > maxWidth) {
			cw = maxWidth
			ch = (maxWidth * height) / width
		} else {
			return file
		}

		canvas.width = cw
		canvas.height = ch

		ctx.clearRect(0, 0, cw, ch)
		ctx.drawImage(img, 0, 0, cw, ch)
		return new Promise((resolve) => {
			canvas.toBlob(blob => {
				blob.lastModifiedDate = new Date()
				const f = new File([blob], file.name, {type: blob.type})
				resolve(f)
			}, file.type, encoderOptions)
		})
	})
}
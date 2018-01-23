class BaseService {
    async get(id) {
        let response = await fetch(`http://localhost:8080/blogs/${id}`)
        if (response.status === 200) {
            return await response.json()
        }
    }

    async post(body) {
        let headers=  new Headers({
            'content-type': 'application/json'
        })
        let request = {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        }

        let response = await fetch('http://localhost:8080/blogs', request)
        if (response.status === 200) {
            return await response.json()
        }
    }
}

export default new BaseService()

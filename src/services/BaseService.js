class BaseService {
    async get(id) {
        let response = await fetch(`http://localhost:8080/blogs/${id}`)
        if (response.status === 200) {
            return await response.json()
        }
    }
}

export default new BaseService()

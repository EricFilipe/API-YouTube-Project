import { pool } from "../../../mysql"
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express'

class VideosRepository{
    create(request: Request, response: Response){
        const { title, description, user_id, thumbnail, publicationDate } = request.body
        pool.getConnection((error: any, connection: any) => {
            connection.query(
                'INSERT INTO videos (video_id, user_id, title, description, thumbnail, publicationDate) VALUES (?,?,?,?,?,?)',
                [uuidv4(), user_id, title, description, thumbnail, publicationDate],
                (error: any, result: any, fields: any) => {
                    connection.release()
                    if(error){
                        return response.status(400).json(error)
                    }
                    response.status(200).json({message: 'Video criado com sucesso'})
                }
            )
        })
    }

    getVideos(request: Request, response: Response){
        const{ user_id } = request.query
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos WHERE user_id = ?',
                [user_id],
                (err: any, result: any, fields: any) =>{
                    connection.release();
                    if(err){
                        return response.status(400).json({err: 'Erro ao buscar vídeos!'})
                    }
                    return response.status(200).json({message: 'Vídeos retornados com sucesso', videos: result})
                }
            )
        })
    }

    searchVideos(request: Request, response: Response){
        const{ search } = request.query
        pool.getConnection((err: any, connection: any) => {
            connection.query(
                'SELECT * FROM videos WHERE title LIKE ?',
                [`%${search}%`],
                (err: any, result: any, fields: any) =>{
                    connection.release();
                    if(err){
                        return response.status(400).json({err: 'Erro ao buscar vídeos!'})
                    }
                    return response.status(200).json({message: 'Vídeos retornados com sucesso', videos: result})
                }
            )
        })
    }
}

export { VideosRepository }
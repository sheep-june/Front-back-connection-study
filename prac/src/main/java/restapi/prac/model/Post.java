package restapi.prac.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    public Post(){}

    public Post(String title,String content){
        this.title=title;
        this.content=content;
    }

}

package work.jeong.murry.todo.todo;

import javax.persistence.*;

@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private long id;

  private boolean done;

  private String text;

  public Todo() {}

  public Todo(boolean done, String text) {
    this.done = done;
    this.text = text;
  }

  public long getId() {
    return id;
  }

  public boolean isDone() {
    return done;
  }

  public String getText() {
    return text;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("Todo{");
    sb.append("id=").append(id);
    sb.append(", done=").append(done);
    sb.append(", text='").append(text).append('\'');
    sb.append('}');
    return sb.toString();
  }

}

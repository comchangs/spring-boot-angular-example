package work.jeong.murry.todo.todo;

import javax.persistence.*;

@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private final long id;

  private final boolean done;

  private final String text;

  public Todo(long id, boolean done, String text) {
    this.id = id;
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

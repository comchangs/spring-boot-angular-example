package work.jeong.murry.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TodoService {

  @Autowired
  private TodoRepository todoRepository;

  public List<Optional<Todo>> getTodos() {
    return Collections.emptyList();
  }

  public boolean addTodo(String text) {
    return true;
  }

}

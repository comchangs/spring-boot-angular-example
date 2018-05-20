package work.jeong.murry.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TodoService {

  @Autowired
  private TodoRepository todoRepository;

  public List<Todo> getTodos() {
    return todoRepository.findAll();
  }

  public Optional<Todo> getTodoById(long id) {
    return todoRepository.findById(id);
  }

  public List<Todo> addTodo(String text) {
    Todo todo = new Todo(false, text);
    todoRepository.save(todo);
    return todoRepository.findAll();
  }

}

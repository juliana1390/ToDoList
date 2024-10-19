package com.example.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.todolist.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}

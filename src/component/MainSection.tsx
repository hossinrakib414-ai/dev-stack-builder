import { use, useState } from 'react';
import Banner from './Banner';
import TaskSection from './TaskSection';
import type { TTask } from '../types/task';
import { toast, ToastContainer } from 'react-toastify';
import Footer from './footer';
import 'react-toastify/dist/ReactToastify.css';

type TMainSectionProps = {
  taskPromise: Promise<TTask[]>;
};
const MainSection = ({ taskPromise }: TMainSectionProps) => {
  const data = use(taskPromise);

  const [task, setTask] = useState<TTask[]>(data);
  const [inProgressTask, setInProgressTask] = useState<TTask[]>([]);
  const [completedTask, setCompletedTask] = useState<TTask[]>([]);

  const handleAddInProgress = (item: TTask) => {
    const filterdTask = inProgressTask.filter(el => el.id !== item.id);
    const updatedInProgress = [...filterdTask, item];
    setInProgressTask(updatedInProgress);

    toast('Task add successfully....');
  };

  const handleAddCompleted = (item: TTask) => {
    const filterdTask = completedTask.filter(el => el.id !== item.id);
    const updatedCompleted = [...filterdTask, item];
    setCompletedTask(updatedCompleted);
    const filterInProgress = inProgressTask.filter(el => el.id !== item.id);
    setInProgressTask(filterInProgress);
    toast.success('Task add queue successfully....');
  };

  const handleRemoveAll = () => {
    setInProgressTask([]);
    toast.success('Task Remove successfully');
  };

  return (
    <div>
      <Banner
        inProgressTask={inProgressTask}
        completedTask={completedTask}
      ></Banner>
      <TaskSection
        tasks={task}
        handleAddInProgress={handleAddInProgress}
        inProgressTask={inProgressTask}
        handleAddCompleted={handleAddCompleted}
        completedTask={completedTask}
        handleRemoveAll={handleRemoveAll}
      ></TaskSection>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainSection;

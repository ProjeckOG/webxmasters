import React, { useState } from 'react';

interface ProjectFormValues {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
}

const ProjectForm: React.FC = async () => {
  const [formData, setFormData] = useState<ProjectFormValues>({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    tools: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can handle the submission, e.g., post to an API.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl m-auto">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="input input-bordered w-full"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Project Description"
        className="textarea textarea-bordered w-full"
        rows={4}
      ></textarea>
      <div className="flex gap-4">
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="input input-bordered"
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      <input
        type="text"
        name="tools"
        value={formData.tools}
        onChange={handleChange}
        placeholder="Software Tools"
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
